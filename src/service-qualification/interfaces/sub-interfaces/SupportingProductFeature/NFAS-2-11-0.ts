import { boolean, object, optional, z } from "zod";
import { ICapacityAvailability } from "../CapacityAvailability";
import { ZSpeedTierAvailability, ZTechnologyType } from "../../../structures";

export const ISPF_NFAS_2110 = object({
    type: z.literal(ZTechnologyType().enum.NFAS),
    version: z.enum(['2.10.0', '2.11.0']),
    capacityAvailability: ICapacityAvailability.array().optional(),
    speedTierAvailability: ZSpeedTierAvailability().array(),
    TC2: z.boolean().optional(),
    TR069UNIV: z.boolean().optional(),
    FTPUNIV: z.boolean().optional(),
});