import { array, boolean, object, optional, string } from "zod";
import { ICapacityAvailability } from "../CapacityAvailability";
import { ZSpeedTierAvailability, ZTechnologyType } from "src/structures";
import { EntityDTO } from "@mikro-orm/core";
import { NCASProductFeatureEntity } from "src/service-qualification/models/discriminators/SupportingProductFeatures/NCASProductFeature.descr";


export const ISPF_NCAS = object({
    type: ZTechnologyType(),
    version: string(),
    multicast: optional(boolean()),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: array(ZSpeedTierAvailability()),
});