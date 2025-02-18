import { z } from "zod";

export const ZLevelTypeCode = z.enum([
  "L", "G", "FL", "UG", "LG", "B", "P", "M", "LB", "RT", "PDM", "SB", "PTHS",
])