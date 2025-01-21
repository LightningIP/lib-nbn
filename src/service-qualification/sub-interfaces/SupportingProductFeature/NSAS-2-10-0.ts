import { array, boolean, literal, object, optional } from "superstruct";
import { ICapacityAvailability } from "../CapacityAvailability";

export const ISPF_NSAS_2100 = object({
    type: literal('NSAS'),
    version: literal('2.10.0'),
    multicast: boolean(),
    capacityAvailability: optional(array(ICapacityAvailability)),
});