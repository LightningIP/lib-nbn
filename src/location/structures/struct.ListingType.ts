import { z } from "zod";

export const ZListingType = z.enum(["HFL", "PFL"]);