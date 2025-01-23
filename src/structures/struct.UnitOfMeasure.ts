import { z } from "zod";

export enum EUnitOfMeasure {
    "Kbps" = "Kbps",
    "Mbps" = "Mbps",
}

export const ZUnitOfMeasure = () => z.nativeEnum(EUnitOfMeasure);