"use client";

import { LeadFormWizard } from "@/components/lead-form-wizard";
import { SITE } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

export function LeadFormModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-form-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close quote form"
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden bg-background-primary shadow-xlarge sm:rounded-sm"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between border-b border-border-primary px-5 py-4 md:px-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent">
                  Free quote
                </p>
                <h2 id="lead-form-title" className="text-xl font-bold md:text-2xl">
                  {SITE.shortName} project guide
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-sm p-2 hover:bg-background-secondary"
                aria-label="Close"
              >
                <RxCross2 className="size-6" />
              </button>
            </div>
            <div className="overflow-y-auto px-5 py-5 md:px-6 md:py-6">
              <LeadFormWizard
                compact
                onCancel={onClose}
                onSuccess={() => {
                  onClose?.();
                  window.location.href = "/thank-you/";
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
