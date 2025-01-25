import { nativeEnum } from "zod";

export enum ETechnologyType {
    "NFAS" = "NFAS",
    "NWAS" = "NWAS",
    "NSAS" = "NSAS",
    "NHAS" = "NHAS",
    "NCAS" = "NCAS",
    "EEAS" = "EEAS",
}

export const ZTechnologyType = () => nativeEnum(ETechnologyType);