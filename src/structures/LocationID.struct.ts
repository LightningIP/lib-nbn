import { pattern, string } from "superstruct";

export const LocationID = () => pattern(string(), /^LOC\d{12}$/);
