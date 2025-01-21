import { enums } from "superstruct";

export enum NTDLocationEnum {
    "INDOOR" = "INDOOR",
    "OUTDOOR" = "OUTDOOR",
}

export const NTDLocationArray = Object.values(NTDLocationEnum)

export const NTDLocation = () => enums(NTDLocationArray);