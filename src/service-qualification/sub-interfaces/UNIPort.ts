import { string, object } from "superstruct";

export const IUNIPort = object({
    id: string(),
    status: string(),
});