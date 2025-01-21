import { enums } from "superstruct";

export enum TechnologyTypeEnum {
    "NFAS" = "NFAS",
    "NWAS" = "NWAS",
    "NSAS" = "NSAS",
    "NHAS" = "NHAS",
    "NCAS" = "NCAS",
}

export const TechnologyTypeArray = Object.values(TechnologyTypeEnum);

export const TechnologyType = () => enums(TechnologyTypeArray);