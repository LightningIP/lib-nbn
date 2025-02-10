import { z } from "zod";

export const ZNTDSerialNumber = () => z.string()
  .min(12, 'NTD Serial Number must be 12 characters long.')
  .max(12, 'NTD Serial Number must be 12 characters long.')
  .regex(/^ALCL[\dA-F]{8}$/, 'NTD Serial Number must be in the format ALCL########');
