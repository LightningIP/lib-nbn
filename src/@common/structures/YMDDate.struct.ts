import { string } from "zod";

const YMDDateRegex = /^YYYY-(?:(?:0[1-9]|1[0-2]))-(?:(?:0[1-9]|[12]\d|3[01]))$/;

export const YMDDatePattern = () => string().regex(YMDDateRegex);

export const YMDDate = () => string().date();