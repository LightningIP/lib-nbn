import { array, assign, boolean, Describe, literal, object, optional, string } from "superstruct";
import { ICapacityAvailability } from "../../";
import { SpeedTierAvailability, TechnologyType, TechnologyTypeEnum } from "../../../structures";
import { SiteRestrictionSupportingProductFeature } from "../../models/SiteRestrictionSupportingProductFeature.entity";
import { EntityDTO } from "@mikro-orm/core";

type SRSPFDTO = EntityDTO<SiteRestrictionSupportingProductFeature>;
type DESCRIBER = Omit<SRSPFDTO, 'siteRestriction'>;

export const ISPF_NCAS_2100: Describe<DESCRIBER> = object({
    type: TechnologyType(),
    version: string(),
    multicast: optional(boolean()),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: optional(array(SpeedTierAvailability())),
});