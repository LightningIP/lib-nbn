import { z } from "zod";
import { ICapacityAvailability } from "../CapacityAvailability";
import { IBandwidthAvailability } from "../BandwidthAvailability";
import { ZTechnologyType } from "../../../structures";

export const ISPF_NWAS_2110 = z.strictObject({
    type: z.literal(ZTechnologyType().enum.NWAS),
    version: z.enum(['2.10.0','2.11.0']),
    capacityAvailability: ICapacityAvailability.array().optional(),
    speedTierAvailability: z.string().array().optional(),
    bandwidthAvailability: IBandwidthAvailability.array().optional(),
});