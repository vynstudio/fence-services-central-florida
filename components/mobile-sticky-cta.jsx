"use client";

import { useLeadForm } from "@/components/lead-form-context";
import { SITE } from "@/lib/site";
import React from "react";
import { BiMessageRoundedDetail, BiSolidQuoteAltRight } from "react-icons/bi";

/**
 * Phone-only sticky bottom bar.
 * iPad/desktop use header CTAs instead (more room, less clutter).
 */
export function MobileStickyCta() {
  const { openForm, open } = useLeadForm();

  if (open) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[850] border-t border-border-primary bg-background-primary/98 p-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md md:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => openForm()}
          className="inline-flex min-h-[3.15rem] items-center justify-center gap-2 rounded-sm bg-brand-accent px-3 py-3 text-[0.9375rem] font-bold text-white touch-manipulation active:opacity-90"
        >
          <BiSolidQuoteAltRight className="size-5 shrink-0" aria-hidden />
          Get quote
        </button>
        <a
          href={SITE.smsHref}
          className="inline-flex min-h-[3.15rem] items-center justify-center gap-2 rounded-sm border border-border-primary bg-background-primary px-3 py-3 text-[0.9375rem] font-bold text-text-primary touch-manipulation active:opacity-90"
        >
          <BiMessageRoundedDetail className="size-5 shrink-0" aria-hidden />
          Text us
        </a>
      </div>
    </div>
  );
}
