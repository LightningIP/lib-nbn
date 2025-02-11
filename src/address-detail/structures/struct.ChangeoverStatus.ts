import { z } from "zod";

export enum EChangeoverStatus {
    'Far Future' = 'Far Future',
}

export const ZChangeoverStatus = () => z.nativeEnum(EChangeoverStatus);
