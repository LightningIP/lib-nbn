import { enums } from "superstruct";

export enum NonPremiseLocationEnum {
    "Yes" = "Yes",
    "No" = "No",
}

export const NonPremiseLocationArray = Object.values(NonPremiseLocationEnum);

export const NonPremiseLocation = () => enums(NonPremiseLocationArray);