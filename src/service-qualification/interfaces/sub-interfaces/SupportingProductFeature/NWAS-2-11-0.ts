import { array, literal, object, optional, string } from "zod";
import { ICapacityAvailability } from "../CapacityAvailability";
import { IBandwidthAvailability } from "../BandwidthAvailability";
import { ZTechnologyType } from "../../../structures";

export const ISPF_NWAS_2110 = object({
    type: literal(ZTechnologyType().enum.NWAS),
    version: literal('2.11.0'),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: optional(array(string())),
    bandwidthAvailability: optional(array(IBandwidthAvailability)),
});