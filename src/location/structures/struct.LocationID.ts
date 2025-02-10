import validateAadhaar from "../../@common/verhoff";
import { z } from "zod";

export const ZLocationID = () => z.string()
    .min(15, 'Location ID must be 15 characters long.')
    .max(15, 'Location ID must be 15 characters long.')
    .regex(/^LOC\d{12}$/, 'Location ID must be in the format LOC############')
    .refine((locid) => validateAadhaar(locid.slice(3)), {
        message: 'Location ID is invalid.'
    });