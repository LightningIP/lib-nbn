import { z } from "zod";

export enum ENTDPowerType {
    "AC" = "AC",
    "DC" = "DC",
}

export const ZNTDPowerType = () => z.nativeEnum(ENTDPowerType);