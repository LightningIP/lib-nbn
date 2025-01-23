import { z } from "zod";

export const IUNIPort = z.strictObject({
    id: z.string(),
    status: z.string(),
});