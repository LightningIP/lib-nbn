import { z } from "zod";

export enum EFeatureType {
    "TC1" = "TC1",
    "TC2" = "TC2",
    "TC4" = "TC4",
}

export const ZFeatureType = () => z.nativeEnum(EFeatureType);
