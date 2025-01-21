import { pattern, string } from "superstruct";

export const NTDMACAddress = () => pattern(string(), /^(?:--:){3}(?:[0-9A-Fa-f]{2}[:-]){2}(?:[0-9A-Fa-f]{2})$/);
