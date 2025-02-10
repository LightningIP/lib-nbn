import validateAadhaar from "../../@common/verhoff";
import { z } from "zod";

export const ZNTDID = () => z.string()
  .min(15, 'NTD ID must be 15 characters long.')
  .max(15, 'NTD ID must be 15 characters long.')
  .regex(/^NTD\d{12}$/, 'NTD ID must be in the format NTD############')
  .refine((ntdid) => validateAadhaar(ntdid.slice(3)), {
    message: 'NTD ID is invalid.'
  });
