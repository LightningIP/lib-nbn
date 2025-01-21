import { array, literal, number, object, optional, string } from "superstruct";
import { ICapacityAvailability } from "../CapacityAvailability";
import { SpeedTierAvailability, TechnologyTypeEnum } from "src/structures";
import { IBandwidthAvailability } from "../BandwidthAvailability";

export const ISPF_NWAS_2100 = object({
    type: literal(TechnologyTypeEnum.NWAS),
    version: literal('2.10.0'),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: optional(array(SpeedTierAvailability())),
    bandwidthAvailability: optional(array(IBandwidthAvailability)),
});