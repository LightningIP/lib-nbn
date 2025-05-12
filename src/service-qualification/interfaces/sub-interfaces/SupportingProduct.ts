import { z } from "zod";
import { ZPriorityAssist } from "../../../structures";

export const ISupportingProduct = z.strictObject({
    id: z.string(),
    priorityAssist: ZPriorityAssist().optional(),
    serviceProviderId: z.string().optional(),
    resourceRef: z.string().array().optional(),
    serviceProvider: z.any().optional(),
})