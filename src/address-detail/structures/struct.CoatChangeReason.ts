import { z } from "zod";

export enum ECoatChangeReason {
    'on-demand' = 'on-demand',
    'nbn-initiated' = 'nbn-initiated',
    'customer-initiated' = 'customer-initiated',
}

export const ZCoatChangeReason = () => z.nativeEnum(ECoatChangeReason);