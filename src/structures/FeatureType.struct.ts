import { enums } from "superstruct";

export enum FeatureTypeEnum {
    "TC1" = "TC1",
    "TC2" = "TC2",
    "TC4" = "TC4",
}

export const FeatureTypeArray = Object.values(FeatureTypeEnum)

export const FeatureType = () => enums(FeatureTypeArray);