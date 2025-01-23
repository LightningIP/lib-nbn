import { z } from "zod";

export enum ESupportingResourceType {
    "NTD" = "NTD",
    "CopperLineResource" = "CopperLineResource",
}

export const ZSupportingResourceType = () => z.nativeEnum(ESupportingResourceType);