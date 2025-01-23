import { z } from "zod";
import { ISR_NTD_2100 } from "./NTD-2-10-0";
import { ISR_NTD_2110 } from "./NTD-2-11-0";

export const INTDResource = z.discriminatedUnion('version', [
    ...ISR_NTD_2100.options,
    ...ISR_NTD_2110.options,
])