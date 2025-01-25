import { ISPF_NFAS_2110 } from "./NFAS-2-11-0";
import { ISPF_NWAS_2110 } from "./NWAS-2-11-0";
import { ISPF_NCAS_2110 } from "./NCAS-2-11-0";
import { ISPF_NHAS_2110 } from "./NHAS-2-11-0";
import { ISPF_NSAS_2110 } from "./NSAS-2-11-0";
import { z } from "zod";

export const ISupportingProductFeature = z.discriminatedUnion('type', [
    ISPF_NCAS_2110,
    ISPF_NWAS_2110,
    ISPF_NHAS_2110,
    ISPF_NSAS_2110,
    ISPF_NFAS_2110,
]);
