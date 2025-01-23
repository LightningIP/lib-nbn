import { strictObject, string } from "zod";

export const ISiteRestrictionNote = strictObject({
    code: string(),
    reason: string(),
    relatedTo: string(),
});