import { enums } from "superstruct";

export enum SupportingResourceTypeEnum {
    "NTD" = "NTD",
    "CopperLineResource" = "CopperLineResource",
}

export const SupportingResourceTypeArray = Object.values(SupportingResourceTypeEnum);

export const SupportingResourceType = () => enums(SupportingResourceTypeArray);