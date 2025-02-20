import { z } from "zod";

/**
 * Indicates that nbn has determined to make a change of access technology at
 * this premises and the technology that is planned. This field is empty if no
 * plans exist or after a change
 */
export const ZPlannedTechnology = z.enum([
  "Fibre", "Wireless", "Copper - FTTN", "Satellite",
]).describe(
  'Indicates that nbn has determined to make a change of access technology at this premises and the technology that is planned. This field is empty if no plans exist or after a change'
);