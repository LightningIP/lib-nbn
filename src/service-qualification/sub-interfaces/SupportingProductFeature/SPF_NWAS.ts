import { array, boolean, Describe, object, optional, string } from "superstruct";
import { ICapacityAvailability } from "../CapacityAvailability";
import { SpeedTierAvailability, TechnologyType } from "src/structures";
import { EntityDTO } from "@mikro-orm/core";
import { NWASProductFeatureEntity } from "src/service-qualification/models/discriminators/SupportingProductFeatures/NWASProductFeature.descr";
import { IBandwidthAvailability } from "../BandwidthAvailability";


type NCASPFDTO = EntityDTO<NWASProductFeatureEntity>;
type DESCRIBER = Omit<NCASPFDTO, 'siteRestriction'>;

export const ISPF_NWAS: Describe<DESCRIBER> = object({
    type: TechnologyType(),
    version: string(),
    multicast: optional(boolean()),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: array(SpeedTierAvailability()),
    bandwidthAvailability: optional(array(IBandwidthAvailability)),
});