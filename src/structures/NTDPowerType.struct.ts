import { enums } from "superstruct";

export enum NTDPowerTypeEnum {
    "AC" = "AC",
    "DC" = "DC",
}

export const NTDPowerTypeArray = Object.values(NTDPowerTypeEnum)

export const NTDPowerType = () => enums(NTDPowerTypeArray);