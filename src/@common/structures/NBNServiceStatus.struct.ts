import { z } from "zod";

export enum ENBNServiceStatus {
    'Line In Use' = 'Line In Use',
    'Line Not In Use' = 'Line Not In Use',
}


export const ZNBNServiceStatus = () => z.nativeEnum(ENBNServiceStatus);