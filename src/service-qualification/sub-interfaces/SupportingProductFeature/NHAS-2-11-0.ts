import { array, boolean, literal, object, string } from "superstruct";
import { ICapacityAvailability } from "../CapacityAvailability";

export const ISPF_NHAS_2110 = object({
    type: literal('NHAS'),
    version: literal('2.11.0'),
    capacityAvailability: array(ICapacityAvailability),
    speedTierAvailability: array(string()),
    TC2: boolean(),
});