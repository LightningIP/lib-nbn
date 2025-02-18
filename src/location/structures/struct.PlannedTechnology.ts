import { z } from "zod";

export const ZPlannedTechnology = z.enum([
  "Fibre", "Wireless", "Copper - FTTN", "Satellite",
]);