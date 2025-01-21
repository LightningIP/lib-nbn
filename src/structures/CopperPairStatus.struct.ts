import { enums } from "superstruct";

export enum CopperPairStatusEnum {
    'Active' = 'Active',
    'Inactive' = 'Inactive',
}

export const CopperPairStatusArray = Object.values(CopperPairStatusEnum);

export const CopperPairStatus = () => enums(CopperPairStatusArray);