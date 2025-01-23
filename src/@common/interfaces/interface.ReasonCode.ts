import z from "zod";

export const IReasonCode = z.strictObject({
    reason: z.string(),
    code: z.string(),
});