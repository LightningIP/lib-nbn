import { ISPF_NWAS_2100 } from "./NWAS-2-10-0";
import { ISPF_NCAS_2100 } from "./NCAS-2-10-0";
import { ISPF_NFAS_2100 } from "./NFAS-2-10-0";
import { ISPF_NSAS_2100 } from "./NSAS-2-10-0";
import { ISPF_NHAS_2100 } from "./NHAS-2-10-0";
import { ISPF_NFAS_2110 } from "./NFAS-2-11-0";
import { ISPF_NWAS_2110 } from "./NWAS-2-11-0";
import { ISPF_NCAS_2110 } from "./NCAS-2-11-0";
import { ISPF_NHAS_2110 } from "./NHAS-2-11-0";
import { ISPF_NSAS_2110 } from "./NSAS-2-11-0";
import { ZSpeedTierAvailability, ZTechnologyType } from "../../../structures";
import { ICapacityAvailability, IBandwidthAvailability } from "../";
import { z, strictObject, discriminatedUnion } from "zod";

const NCAS = z.discriminatedUnion('version', [
    ISPF_NCAS_2100,
    ISPF_NCAS_2110,
]);

const NWAS = z.discriminatedUnion('version', [
    ISPF_NWAS_2100,
    ISPF_NWAS_2110,
]);

export const ISupportingProductFeature = discriminatedUnion('type', [
    ...NCAS.options,
    ...NWAS.options,
]);


strictObject({
    type: ZTechnologyType(),
    version: z.string(),
    multicast: z.boolean().optional(),
    capacityAvailability: ICapacityAvailability,
    speedTierAvailability: ZSpeedTierAvailability().array().optional(),
    bandwidthAvailability: IBandwidthAvailability.array().optional(),
})

/*

z.union([
    
    ISPF_NCAS_2100,
    ISPF_NCAS_2110,
    
    ISPF_NWAS_2100,
    ISPF_NWAS_2110,

    ISPF_NFAS_2100,
    ISPF_NFAS_2110,

    ISPF_NSAS_2100,
    ISPF_NSAS_2110,
    
    ISPF_NHAS_2100,
    ISPF_NHAS_2110,

]); */