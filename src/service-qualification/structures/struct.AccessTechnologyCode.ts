import { nativeEnum } from "zod";

export enum EAccessTechnologyCode {
    "FTTN" = "FTTN",
    "FTTP" = "FTTP",
    "FTTB" = "FTTB",
    "FTTC" = "FTTC",
    "HFC" = "HFC",
    "WIRELESS" = "WIRELESS",
    "SATELLITE" = "SATELLITE",
}

export const ZAccessTechnologyCode = () => nativeEnum(EAccessTechnologyCode);