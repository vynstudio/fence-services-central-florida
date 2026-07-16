"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { LeadFormModal } from "@/components/lead-form-modal";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

const LeadFormContext = createContext({
  open: false,
  openForm: () => {},
  closeForm: () => {},
});

export function useLeadForm() {
  return useContext(LeadFormContext);
}

export function LeadFormProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openForm = useCallback(() => setOpen(true), []);
  const closeForm = useCallback(() => setOpen(false), []);

  return (
    <LeadFormContext.Provider value={{ open, openForm, closeForm }}>
      {children}
      <LeadFormModal open={open} onClose={closeForm} />
      <MobileStickyCta />
    </LeadFormContext.Provider>
  );
}
