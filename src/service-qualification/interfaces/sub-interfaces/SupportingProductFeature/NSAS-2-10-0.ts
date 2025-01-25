import { array, boolean, literal, object, optional } from "zod";
import { ICapacityAvailability } from "../CapacityAvailability";
import { ZTechnologyType } from "../../../structures";

export const ISPF_NSAS_2100 = object({
    type: literal(ZTechnologyType().enum.NSAS),
    version: literal('2.10.0'),
    multicast: boolean(),
    capacityAvailability: optional(array(ICapacityAvailability)),
});