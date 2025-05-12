import { nativeEnum } from "zod";

export enum ENTDPortStatus {
    "Available" = "Available",
    "Used" = "Used",
}

export const ZNTDPortStatus = () => nativeEnum(ENTDPortStatus);