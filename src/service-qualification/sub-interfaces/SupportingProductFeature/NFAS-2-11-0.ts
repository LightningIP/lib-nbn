import { array, boolean, literal, object, optional, string } from "superstruct";
import { SpeedTierAvailability } from "src/structures";
import { ICapacityAvailability } from "../CapacityAvailability";

export const ISPF_NFAS_2110 = object({
    type: literal('NFAS'),
    version: literal('2.11.0'),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: array(SpeedTierAvailability()),
    TC2: optional(boolean()),
    TR069UNIV: optional(boolean()),
    FTPUNIV: optional(boolean()),
});