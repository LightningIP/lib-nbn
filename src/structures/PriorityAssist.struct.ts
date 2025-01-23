import { nativeEnum } from "zod";

export enum EPriorityAssist {
    "Yes" = "Yes",
    "No" = "No",
}

export const ZPriorityAssist = () => nativeEnum(EPriorityAssist);