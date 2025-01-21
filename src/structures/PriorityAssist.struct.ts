import { enums } from "superstruct";

export enum PriorityAssistEnum {
    "Yes" = "Yes",
    "No" = "No",
}

export const PriorityAssistArray = Object.values(PriorityAssistEnum);

export const PriorityAssist = () => enums(PriorityAssistArray);