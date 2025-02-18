import { z } from "zod";

export const ZCoatDescriptor = z.enum([
  "Fixed Wireless and Satellite Upgrade Program",
  "Historical COAT Reasons",
  "Assurance Fibre Upgrade",
  "Network Activity Ticket - Underperforming Lines Flip",
  "Regional Area Flip",
  "Network Proactive Premises Flip",
  "MDU Fibre Upgrade - Residential",
  "MDU Fibre Upgrade - Business",
  "Customer Funded - Individual Premises Flip",
  "Never Connected and Inactive Premises Flip to Fibre",
]);