import { enums } from "superstruct";

export enum NTDTypeEnum {
    "INTERNAL" = "INTERNAL",
    "EXTERNAL" = "EXTERNAL",
}

export const NTDTypeArray = Object.values(NTDTypeEnum)

export const NTDType = () => enums(NTDTypeArray);