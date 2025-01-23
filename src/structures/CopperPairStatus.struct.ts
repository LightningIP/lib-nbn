import { nativeEnum } from "zod";

export enum CopperPairStatusEnum {
    'Active' = 'Active',
    'Inactive' = 'Inactive',
}

export const CopperPairStatusArray = Object.values(CopperPairStatusEnum);

export const CopperPairStatus = () => nativeEnum(CopperPairStatusEnum);