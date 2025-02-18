import { z } from "zod";

export const ZStateTerritoryCode = z.enum(["QLD", "NSW", "WA", "VIC", "SA", "TAS", "ACT","NT"])