"use client";

import { Button } from "@relume_io/relume-ui";
import { useLeadForm } from "@/components/lead-form-context";
import React from "react";

/**
 * Opens the guided lead form popup.
 * Opens the guided lead form (requires LeadFormProvider).
 */
export function QuoteButton({
  children = "Free quote",
  title = "Free quote",
  variant = "primary",
  size = "primary",
  className = "",
  ...props
}) {
  const { openForm } = useLeadForm();

  return (
    <Button
      type="button"
      title={title}
      variant={variant}
      size={size}
      className={className}
      onClick={() => openForm()}
      {...props}
    >
      {children}
    </Button>
  );
}
