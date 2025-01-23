import { array, object, optional, string } from "zod";
import { ZPriorityAssist } from "src/structures";

export const ISupportingProduct = object({
    id: string(),
    priorityAssist: optional(ZPriorityAssist()),
    serviceProviderId: optional(string()),
    resourceRef: optional(array(string())),
})