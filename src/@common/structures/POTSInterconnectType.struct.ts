import { z } from "zod";

export enum EPOTSInterconnectType {
    'ULL' = 'ULL',
    'FNN' = 'FNN',
}

export const ZPOTSInterconnectType = () => z.nativeEnum(EPOTSInterconnectType);