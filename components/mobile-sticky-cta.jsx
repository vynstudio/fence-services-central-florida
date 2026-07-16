"use client";

import { useLeadForm } from "@/components/lead-form-context";
import { SITE } from "@/lib/site";
import React from "react";
import { BiMessageRoundedDetail, BiSolidQuoteAltRight } from "react-icons/bi";

/**
 * Mobile-only sticky bottom bar: Get quote (popup) + Text us (SMS).
 */
export function MobileStickyCta() {
  const { openForm, open } = useLeadForm();

  // Hide while quote modal is open so it doesn’t stack
  if (open) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[850] border-t border-border-primary bg-background-primary/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => openForm()}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-background-alternative px-3 py-3 text-sm font-bold text-text-alternative active:opacity-90"
        >
          <BiSolidQuoteAltRight className="size-5 shrink-0" aria-hidden />
          Get quote
        </button>
        <a
          href={SITE.smsHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-border-primary bg-background-primary px-3 py-3 text-sm font-bold text-text-primary active:opacity-90"
        >
          <BiMessageRoundedDetail className="size-5 shrink-0" aria-hidden />
          Text us
        </a>
      </div>
    </div>
  );
}
