import { nativeEnum } from "zod";

export enum YesNoEnum {
    "Yes" = "Yes",
    "No" = "No",
}

export const YesNo = () => nativeEnum((YesNoEnum));