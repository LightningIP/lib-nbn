import { z } from "zod";

export enum ENTDLocation {
    "INDOOR" = "INDOOR",
    "OUTDOOR" = "OUTDOOR",
}

export const ZNTDLocation = () => z.nativeEnum(ENTDLocation);