import { SpeedTierAvailability } from "../../../structures";
import { array, boolean, literal, object, optional } from "superstruct";
import { ICapacityAvailability } from "../CapacityAvailability";

export const ISPF_NSAS_2110 = object({
    type: literal('NSAS'),
    version: literal('2.11.0'),
    multicast: boolean(),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: optional(array(SpeedTierAvailability())),
});