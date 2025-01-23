import { z } from "zod";

export enum ENTDType {
    "INTERNAL" = "INTERNAL",
    "EXTERNAL" = "EXTERNAL",
}

export const ZNTDType = () => z.nativeEnum(ENTDType);