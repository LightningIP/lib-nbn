import { z } from "zod";

export enum EFeatureType {
    "TC1" = "TC1",
    "TC2" = "TC2",
    "TC4" = "TC4",
    "FW Home Fast" = "FW Home Fast",
    "FW Superfast" = "FW Superfast",
}

export const ZFeatureType = () => z.nativeEnum(EFeatureType);
