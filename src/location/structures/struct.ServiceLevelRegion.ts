import { z } from "zod";

export const ZServiceLevelRegion = z.enum([
  "URBAN", "REMOTE", "MINOR RURAL", "MAJOR RURAL",
  "LIMITED ACCESS", "ISOLATED",
]);