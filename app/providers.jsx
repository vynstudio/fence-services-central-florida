"use client";

import { LeadFormProvider } from "@/components/lead-form-context";
import React from "react";

export function Providers({ children }) {
  return <LeadFormProvider>{children}</LeadFormProvider>;
}
