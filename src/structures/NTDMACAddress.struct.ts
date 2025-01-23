import z from "zod";

export const ZNTDMACAddress = () => z.string().regex(/^(?:--:){3}(?:[0-9A-Fa-f]{2}[:-]){2}(?:[0-9A-Fa-f]{2})$/);
