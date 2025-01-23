import { nativeEnum } from "zod";

export enum EServiceabilityStatus {
    "Serviceable" = "Serviceable",
    "Serviceable - Shortfall" = "Serviceable - Shortfall",
    "Rejected" = "Rejected",
}

export const ZServiceabilityStatus = () => nativeEnum(EServiceabilityStatus);