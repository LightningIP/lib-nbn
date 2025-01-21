import { array, assign, boolean, literal, object, optional, string } from "superstruct";
import { ICapacityAvailability } from "../CapacityAvailability";
import { SpeedTierAvailability } from "src/structures";

export const ISPF_NCAS_2110 = object({
    type: literal('NCAS'),
    version: literal('2.11.0'),
    multicast: optional(boolean()),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: array(SpeedTierAvailability()),
});