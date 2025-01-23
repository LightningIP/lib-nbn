import { array, boolean, object, optional, z } from "zod";
import { ICapacityAvailability } from "../CapacityAvailability";
import { ZSpeedTierAvailability, ZTechnologyType } from "src/structures";

export const ISPF_NCAS_2110 = object({
    type: z.literal(ZTechnologyType().enum.NCAS),
    version: z.literal('2.11.0'),
    multicast: optional(boolean()),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: array(ZSpeedTierAvailability()),
});