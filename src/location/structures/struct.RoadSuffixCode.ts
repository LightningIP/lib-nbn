import { z } from "zod";

export const ZRoadSuffixCode = z.enum([
    "W", "E", "S", "N", "EX", "OF", "DE", "SW", "CN", "LR", "ML",
]);