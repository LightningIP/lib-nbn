import { object, string } from "superstruct";

export const ISiteRestrictionNote = object({
    code: string(),
    reason: string(),
    relatedTo: string(),
});