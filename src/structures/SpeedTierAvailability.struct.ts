import { enums } from "superstruct";

export enum SpeedTierAvailabilityEnum {
    "Home Fast" = "Home Fast",
    "Home Superfast" = "Home Superfast",
    "Home Ultrafast" = "Home Ultrafast",
    "FW Home Fast" = "FW Home Fast",
    "FW Superfast" = "FW Superfast",
}

export const SpeedTierAvailabilityArray = Object.values(SpeedTierAvailabilityEnum)

export const SpeedTierAvailability = () => enums(SpeedTierAvailabilityArray);