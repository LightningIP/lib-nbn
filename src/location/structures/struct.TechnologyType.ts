import { z } from "zod";

export const ZTechnologyType = z.enum([
  "FIBRE", "WIRELESS", "SATELLITE",
  "HFC", "FIBRE TO THE CURB",
  "FIBRE TO THE NODE", "FIBRE TO THE BUILDING",
]);