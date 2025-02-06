import { z } from "zod";

export enum ECopperPairStatus {
    'Active' = 'Active',
    'Inactive' = 'Inactive',
}

export const ZCopperPairStatus = () => z.nativeEnum(ECopperPairStatus);