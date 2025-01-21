import { array, boolean, Describe, object, optional, string } from "superstruct";
import { ICapacityAvailability } from "../CapacityAvailability";
import { SpeedTierAvailability, TechnologyType } from "src/structures";
import { EntityDTO } from "@mikro-orm/core";
import { NCASProductFeatureEntity } from "src/service-qualification/models/discriminators/SupportingProductFeatures/NCASProductFeature.descr";


type NCASPFDTO = EntityDTO<NCASProductFeatureEntity>;
type DESCRIBER = Omit<NCASPFDTO, 'siteRestriction'>;

export const ISPF_NCAS: Describe<DESCRIBER> = object({
    type: TechnologyType(),
    version: string(),
    multicast: optional(boolean()),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: array(SpeedTierAvailability()),
});