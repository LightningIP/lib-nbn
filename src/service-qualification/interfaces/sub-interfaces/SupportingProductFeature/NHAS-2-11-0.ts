import { array, boolean, literal, object } from "zod";
import { ICapacityAvailability } from "../CapacityAvailability";
import { ZSpeedTierAvailability, ZTechnologyType } from "../../../structures";

export const ISPF_NHAS_2110 = object({
    type: literal(ZTechnologyType().enum.NHAS),
    version: literal('2.11.0'),
    capacityAvailability: array(ICapacityAvailability),
    speedTierAvailability: array(ZSpeedTierAvailability()),
    TC2: boolean(),
});