import { array, boolean, Describe, nullable, object, optional, string, union } from "superstruct";
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
import { EntityDTO } from "@mikro-orm/core";
import { SiteRestrictionSupportingProductFeature } from "../../models/SiteRestrictionSupportingProductFeature.entity";
import { SpeedTierAvailability, TechnologyType } from "../../../structures";
import { ICapacityAvailability, IBandwidthAvailability } from "../";

type SRSPFDTO = EntityDTO<SiteRestrictionSupportingProductFeature>;
type DESCRIBER = Omit<SRSPFDTO, 'siteRestriction'>;

export const ISupportingProductFeature: Describe<DESCRIBER> = object({
    type: TechnologyType(),
    version: string(),
    multicast: optional(boolean()),
    capacityAvailability: array(ICapacityAvailability),
    speedTierAvailability: optional(array(SpeedTierAvailability())),
    bandwidthAvailability: optional(array(IBandwidthAvailability))
})


union([
    
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

]);