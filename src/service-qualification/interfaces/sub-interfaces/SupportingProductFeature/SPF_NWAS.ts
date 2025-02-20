import { z } from "zod";
import { ICapacityAvailability } from "../CapacityAvailability";
import { ZSpeedTierAvailability, ZTechnologyType } from "../../../structures";
import { IBandwidthAvailability } from "../BandwidthAvailability";

export const ISPF_NWAS = z.strictObject({
    type: ZTechnologyType(),
    version: z.string(),
    multicast: z.boolean().optional(),
    capacityAvailability: ICapacityAvailability.array().optional(),
    speedTierAvailability: ZSpeedTierAvailability().array().optional(),
    bandwidthAvailability: IBandwidthAvailability.array().optional(),
});
