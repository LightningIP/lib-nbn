import { z } from "zod";

export enum ERoadSuffixCode {
    N = 'N',
    S = 'S',
    E = 'E',
    W = 'W',
    SE = 'SE',
    SW = 'SW',
    EX = 'EX',
    CN = 'CN',
    DE = 'DE',
}

export const ZRoadSuffixCode = z.nativeEnum(ERoadSuffixCode);