import { nativeEnum } from "zod";

export enum ERegion {
    "Urban" = "Urban",
    "Major Rural" = "Major Rural",
    "Minor Rural" = "Minor Rural",
    "Remote" = "Remote",
    "Isolated" = "Isolated",
}

export const ZRegion = () => nativeEnum(ERegion);