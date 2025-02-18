import { z } from "zod";

export const ZCoatReason = z.enum([
  "customer-initiated", "nbn-initiated", "on-demand"
]);