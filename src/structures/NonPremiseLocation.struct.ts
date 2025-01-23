import { nativeEnum } from "zod";

export enum ENonPremiseLocation {
    "Yes" = "Yes",
    "No" = "No",
}

export const ZNonPremiseLocation = () => nativeEnum(ENonPremiseLocation);