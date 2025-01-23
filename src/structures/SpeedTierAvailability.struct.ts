import { nativeEnum } from "zod";

export enum ESpeedTierAvailability {
    "Home Fast" = "Home Fast",
    "Home Superfast" = "Home Superfast",
    "Home Ultrafast" = "Home Ultrafast",
    "FW Home Fast" = "FW Home Fast",
    "FW Superfast" = "FW Superfast",
}

export const ZSpeedTierAvailability = () => nativeEnum(ESpeedTierAvailability);