import { z } from "zod";

export const ZNTDID = () => z.string()
  .min(15, 'NTD ID must be 15 characters long.')
  .max(15, 'NTD ID must be 15 characters long.')
  .regex(/^NTD\d{12}$/, 'NTD ID must be in the format NTD############');
