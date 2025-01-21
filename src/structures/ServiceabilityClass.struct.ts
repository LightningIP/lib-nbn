import { enums, coerce, string, any, is, bigint } from "superstruct";

export type ServiceabilityClassType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 20 | 21 | 22 | 23 | 24 | 30 | 31 | 32 | 33 | 34;

export const ServiceabilityClassArray: Readonly<ServiceabilityClassType[]> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 21, 22, 23, 24, 30, 31, 32, 33, 34 ];

export const ServiceabilityClass = () => enums(ServiceabilityClassArray);

export const CoerceServiceabilityClass = () => coerce(ServiceabilityClass(), any(), (value) => {
    if (is(value, ServiceabilityClass())) {
        return value;
    }
    if (is(value, string())) {
        return parseInt(value);
    }
    if (is(value, bigint())) {
        return Number(value);
    }
    return value;
});