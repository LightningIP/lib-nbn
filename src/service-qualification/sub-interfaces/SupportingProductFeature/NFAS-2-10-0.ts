import { array, boolean, literal, object, string } from "superstruct";
import { ICapacityAvailability } from "../CapacityAvailability";
import { SpeedTierAvailability } from "src/structures";

export const ISPF_NFAS_2100 = object({
    type: literal('NFAS'),
    version: literal('2.10.0'),
    capacityAvailability: array(ICapacityAvailability),
    speedTierAvailability: array(SpeedTierAvailability()),
    TC2: boolean(),
});