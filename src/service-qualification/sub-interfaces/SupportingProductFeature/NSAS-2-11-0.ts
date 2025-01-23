import { ZSpeedTierAvailability, ZTechnologyType } from "../../../structures";
import { array, boolean, literal, object, optional } from "zod";
import { ICapacityAvailability } from "../CapacityAvailability";

export const ISPF_NSAS_2110 = object({
    type: literal(ZTechnologyType().enum.NSAS),
    version: literal('2.11.0'),
    multicast: boolean(),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: optional(array(ZSpeedTierAvailability())),
});