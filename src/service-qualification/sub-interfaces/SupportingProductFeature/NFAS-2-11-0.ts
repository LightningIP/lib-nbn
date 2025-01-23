import { array, boolean, literal, object, optional } from "zod";
import { ZSpeedTierAvailability, ZTechnologyType } from "src/structures";
import { ICapacityAvailability } from "../CapacityAvailability";

export const ISPF_NFAS_2110 = object({
    type: literal(ZTechnologyType().enum.NFAS),
    version: literal('2.11.0'),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: array(ZSpeedTierAvailability()),
    TC2: optional(boolean()),
    TR069UNIV: optional(boolean()),
    FTPUNIV: optional(boolean()),
});