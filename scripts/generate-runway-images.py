#!/usr/bin/env python3
"""Generate realistic FenceLine Florida website images via Runway API."""

from __future__ import annotations

import json
import os
import sys
import time
import urllib.error
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_DESKTOP = ROOT / "public/images/desktop"
OUT_TABLET = ROOT / "public/images/tablet"
OUT_MOBILE = ROOT / "public/images/mobile"
OUT_LEGACY = ROOT / "public/images"
RAW = ROOT / "public/images/runway-raw"

API = "https://api.dev.runwayml.com/v1"
VERSION = "2024-11-06"
# Prefer env; allow CLI override
KEY = os.environ.get("RUNWAY_API_KEY", "").strip()

# Global brand look for all prompts
GLOBAL = (
    "Photorealistic commercial photography for a Florida fence contractor website. "
    "Central Florida residential setting: St. Augustine grass, palm trees, live oaks, "
    "suburban homes, bright natural daylight or golden hour. "
    "Straight fence lines, professional install quality, no people, no text, no logos, "
    "no watermarks, no CGI plastic look, high detail, magazine quality."
)

# ratio landscape for web crops
RATIO = "1920:1080"

ASSETS = [
    {
        "key": "wood",
        "legacy": "home-gallery-section-0.jpg",
        "prompt": (
            f"{GLOBAL} Subject: newly installed pressure-treated wood privacy fence, "
            "warm cedar tone, vertical boards, solid posts, Florida backyard, "
            "slight dappled shade, clean professional install."
        ),
    },
    {
        "key": "vinyl",
        "legacy": "home-gallery-section-1.jpg",
        "prompt": (
            f"{GLOBAL} Subject: white vinyl PVC privacy fence, clean panels no warping, "
            "HOA-style Florida subdivision, bright sun, modern home soft in background."
        ),
    },
    {
        "key": "aluminum",
        "legacy": "home-gallery-section-3.jpg",
        "prompt": (
            f"{GLOBAL} Subject: black ornamental aluminum fence around a Florida pool deck, "
            "spear-top or flat-top clean lines, water reflections, tropical landscaping, "
            "pool-barrier style, powder-coat finish."
        ),
    },
    {
        "key": "chain",
        "legacy": "home-gallery-section-2.jpg",
        "prompt": (
            f"{GLOBAL} Subject: neat galvanized or black chain-link fence with top rail, "
            "straight posts in sandy Florida soil, green grass, blue sky, "
            "residential or light commercial security look."
        ),
    },
    {
        "key": "about",
        "legacy": "home-about-section.jpg",
        "prompt": (
            f"{GLOBAL} Subject: wide establishing shot of a finished wood privacy fence "
            "along a Florida property line, palms and suburban roofs, sense of coverage "
            "and service area, warm late afternoon light, cinematic still."
        ),
    },
    {
        "key": "gallery-0",
        "legacy": "home-gallery-section-4.jpg",
        "prompt": (
            f"{GLOBAL} Subject: close-medium detail of wood fence posts and panels, "
            "craftsmanship focus, level rails, Florida yard soft bokeh background."
        ),
    },
    {
        "key": "gallery-1",
        "legacy": "home-gallery-section-5.jpg",
        "prompt": (
            f"{GLOBAL} Subject: vinyl privacy fence with matching gate, Florida home, "
            "clean hardware, low-maintenance look, bright daylight."
        ),
    },
    {
        "key": "gallery-2",
        "legacy": "home-hero-header-section.jpg",
        "prompt": (
            f"{GLOBAL} Subject: ornamental steel or aluminum street-front fence, "
            "classic iron look, Florida landscaping, premium curb appeal."
        ),
    },
    {
        "key": "gallery-3",
        "legacy": "home-features-list-section-0.jpg",
        "prompt": (
            f"{GLOBAL} Subject: driveway gate on a wood or aluminum fence system, "
            "Florida residential entrance, solid hardware, professional install."
        ),
    },
]


def req(method: str, path: str, body: dict | None = None) -> dict:
    data = None if body is None else json.dumps(body).encode("utf-8")
    r = urllib.request.Request(
        f"{API}{path}",
        data=data,
        method=method,
        headers={
            "Authorization": f"Bearer {KEY}",
            "X-Runway-Version": VERSION,
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(r, timeout=120) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        err = e.read().decode()
        raise RuntimeError(f"HTTP {e.code}: {err[:500]}") from e


def generate(prompt: str, seed: int) -> str:
    """Start gen and return output URL."""
    task = req(
        "POST",
        "/text_to_image",
        {
            "model": "gen4_image",
            "promptText": prompt[:1000],
            "ratio": RATIO,
            "seed": seed,
        },
    )
    tid = task["id"]
    print(f"  task {tid}", flush=True)
    for i in range(60):
        time.sleep(3)
        st = req("GET", f"/tasks/{tid}")
        status = st.get("status")
        prog = st.get("progress")
        print(f"  [{i+1}] {status} {prog}", flush=True)
        if status == "SUCCEEDED":
            out = st.get("output") or []
            if not out:
                raise RuntimeError("empty output")
            return out[0]
        if status in ("FAILED", "CANCELLED"):
            raise RuntimeError(st.get("failure") or status)
    raise RuntimeError("timeout")


def download(url: str) -> Image.Image:
    with urllib.request.urlopen(url, timeout=120) as resp:
        return Image.open(BytesIO(resp.read())).convert("RGB")


def cover_crop(im: Image.Image, tw: int, th: int) -> Image.Image:
    sw, sh = im.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(sw * scale + 0.5), int(sh * scale + 0.5)
    im2 = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return im2.crop((left, top, left + tw, top + th))


def save_variants(key: str, im: Image.Image, legacy: str | None):
    # Desktop ~16:10, tablet 4:3, mobile 3:4
    desktop = cover_crop(im, 1600, 1000)
    tablet = cover_crop(im, 1200, 900)
    mobile = cover_crop(im, 900, 1200)

    OUT_DESKTOP.mkdir(parents=True, exist_ok=True)
    OUT_TABLET.mkdir(parents=True, exist_ok=True)
    OUT_MOBILE.mkdir(parents=True, exist_ok=True)
    RAW.mkdir(parents=True, exist_ok=True)

    im.save(RAW / f"{key}.jpg", "JPEG", quality=92, optimize=True)
    desktop.save(OUT_DESKTOP / f"{key}.jpg", "JPEG", quality=90, optimize=True)
    tablet.save(OUT_TABLET / f"{key}.jpg", "JPEG", quality=90, optimize=True)
    mobile.save(OUT_MOBILE / f"{key}.jpg", "JPEG", quality=90, optimize=True)

    if legacy:
        # keep legacy flat path used as fallbacks
        desktop.save(OUT_LEGACY / legacy, "JPEG", quality=90, optimize=True)

    print(f"  saved {key} (+ legacy {legacy})", flush=True)


def main():
    global KEY
    if len(sys.argv) > 1 and sys.argv[1].startswith("key_"):
        KEY = sys.argv[1]
    if not KEY:
        print("Set RUNWAY_API_KEY or pass key_... as arg", file=sys.stderr)
        sys.exit(1)

    only = set(sys.argv[2:]) if len(sys.argv) > 2 else None
    assets = [a for a in ASSETS if not only or a["key"] in only]

    print(f"Generating {len(assets)} assets…", flush=True)
    for i, a in enumerate(assets):
        print(f"\n=== {a['key']} ({i+1}/{len(assets)}) ===", flush=True)
        try:
            url = generate(a["prompt"], seed=1000 + i * 17)
            im = download(url)
            save_variants(a["key"], im, a.get("legacy"))
        except Exception as e:
            print(f"  FAILED {a['key']}: {e}", flush=True)
            continue
        # rate limit / concurrency 1
        time.sleep(1)

    print("\nDone.", flush=True)


if __name__ == "__main__":
    main()
