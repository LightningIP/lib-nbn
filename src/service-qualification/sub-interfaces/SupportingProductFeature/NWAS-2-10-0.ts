import { array, literal, number, object, optional, string } from "zod";
import { ICapacityAvailability } from "../CapacityAvailability";
import { ZSpeedTierAvailability, ZTechnologyType } from "../../../structures";
import { IBandwidthAvailability } from "../BandwidthAvailability";

export const ISPF_NWAS_2100 = object({
    type: literal(ZTechnologyType().enum.NWAS),
    version: literal('2.10.0'),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: optional(array(ZSpeedTierAvailability())),
    bandwidthAvailability: optional(array(IBandwidthAvailability)),
});