import { pattern, string } from "superstruct";

export const CSAID = () => pattern(string(), /^CSA\d{12}$/);