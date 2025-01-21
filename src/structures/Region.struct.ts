import { enums } from "superstruct";

export enum RegionEnum {
    "Urban" = "Urban",
    "Major Rural" = "Major Rural",
    "Minor Rural" = "Minor Rural",
    "Remote" = "Remote",
    "Isolated" = "Isolated",
}

export const RegionArray = Object.values(RegionEnum);

export const Region = () => enums(RegionArray);