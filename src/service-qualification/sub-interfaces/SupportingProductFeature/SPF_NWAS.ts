import { array, boolean, object, optional, string } from "zod";
import { ICapacityAvailability } from "../CapacityAvailability";
import { ZSpeedTierAvailability, ZTechnologyType } from "src/structures";
import { IBandwidthAvailability } from "../BandwidthAvailability";


export const ISPF_NWAS = object({
    type: ZTechnologyType(),
    version: string(),
    multicast: optional(boolean()),
    capacityAvailability: optional(array(ICapacityAvailability)),
    speedTierAvailability: array(ZSpeedTierAvailability()),
    bandwidthAvailability: optional(array(IBandwidthAvailability)),
});