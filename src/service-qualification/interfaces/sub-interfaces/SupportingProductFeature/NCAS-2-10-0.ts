import { array, boolean, object, optional, z } from "zod";
import { ZSpeedTierAvailability, ZTechnologyType } from "../../../structures";
import { ICapacityAvailability } from "../CapacityAvailability";


export const ISPF_NCAS_2100 = object({
    type: z.literal(ZTechnologyType().enum.NCAS),
    version: z.literal('2.10.0'),
    multicast: optional(boolean()),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: optional(array(ZSpeedTierAvailability())),
});