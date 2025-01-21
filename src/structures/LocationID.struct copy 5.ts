import { pattern, string } from "superstruct";

export const LocationId = () => pattern(string(), /^LOC\d{12}$/);
