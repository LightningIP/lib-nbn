import { enums, coerce, string, any, is, bigint } from "superstruct";
import { z } from "zod";

export type ServiceabilityClassType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 20 | 21 | 22 | 23 | 24 | 30 | 31 | 32 | 33 | 34;

export const ServiceabilityClassArray: Readonly<(ServiceabilityClassType | number)[]> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 21, 22, 23, 24, 30, 31, 32, 33, 34 ];

export const ZServiceabilityClass = () => z.number({
        coerce: true,
    })
    .int().min(0).max(34)
    .refine((value) => ServiceabilityClassArray.includes(value), {
        message: 'Invalid ServiceabilityClass',
    });