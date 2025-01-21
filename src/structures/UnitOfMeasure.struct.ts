import { enums } from "superstruct";

export enum UnitOfMeasureEnum {
    "Kbps" = "Kbps",
    "Mbps" = "Mbps",
}

export const UnitOfMeasureArray = Object.values(UnitOfMeasureEnum)

export const UnitOfMeasure = () => enums(UnitOfMeasureArray);