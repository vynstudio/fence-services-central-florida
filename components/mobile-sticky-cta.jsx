"use client";

import { useLeadForm } from "@/components/lead-form-context";
import { SITE } from "@/lib/site";
import React from "react";
import {
  BiMessageRoundedDetail,
  BiPhone,
  BiSolidQuoteAltRight,
} from "react-icons/bi";

/**
 * Phone-only sticky bottom bar.
 * Three equal actions: Quote · Call · Text — thumb-friendly.
 * iPad/desktop use header CTAs instead.
 */
export function MobileStickyCta() {
  const { openForm, open } = useLeadForm();

  if (open) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[850] border-t border-border-primary bg-background-primary/98 px-2.5 pt-2 pb-[max(0.55rem,env(safe-area-inset-bottom))] shadow-[0_-6px_24px_rgba(11,26,22,0.08)] backdrop-blur-md md:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-1.5">
        <button
          type="button"
          onClick={() => openForm()}
          className="inline-flex min-h-[3.1rem] flex-col items-center justify-center gap-0.5 rounded-sm bg-brand-accent px-1.5 py-2 text-[0.7rem] font-bold leading-none text-white touch-manipulation active:opacity-90 sm:flex-row sm:gap-1.5 sm:text-[0.8125rem]"
        >
          <BiSolidQuoteAltRight className="size-4 shrink-0 sm:size-5" aria-hidden />
          Quote
        </button>
        <a
          href={SITE.phoneHref}
          className="inline-flex min-h-[3.1rem] flex-col items-center justify-center gap-0.5 rounded-sm border border-brand-accent bg-background-primary px-1.5 py-2 text-[0.7rem] font-bold leading-none text-brand-accent touch-manipulation active:bg-brand-soft sm:flex-row sm:gap-1.5 sm:text-[0.8125rem]"
        >
          <BiPhone className="size-4 shrink-0 sm:size-5" aria-hidden />
          Call
        </a>
        <a
          href={SITE.smsHref}
          className="inline-flex min-h-[3.1rem] flex-col items-center justify-center gap-0.5 rounded-sm border border-border-primary bg-background-primary px-1.5 py-2 text-[0.7rem] font-bold leading-none text-text-primary touch-manipulation active:opacity-90 sm:flex-row sm:gap-1.5 sm:text-[0.8125rem]"
        >
          <BiMessageRoundedDetail className="size-4 shrink-0 sm:size-5" aria-hidden />
          Text
        </a>
      </div>
    </div>
  );
}
