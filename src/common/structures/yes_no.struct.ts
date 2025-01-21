import { enums } from "superstruct";

export enum YesNoEnum {
    "Yes" = "Yes",
    "No" = "No",
}

export const YesNo = () => enums(Object.values(YesNoEnum));