import { enums } from "superstruct";

export enum POTSInterconnectTypeEnum {
    'ULL' = 'ULL',
    'FNN' = 'FNN',
}

export const POTSInterconnectTypeArray = Object.values(POTSInterconnectTypeEnum);

export const POTSInterconnectType = () => enums(POTSInterconnectTypeArray);