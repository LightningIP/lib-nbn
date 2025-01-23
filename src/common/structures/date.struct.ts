/*import { Infer, coerce, date, is, pattern, string, union } from "zod";

export const ISODateStruct = () => pattern(string(), /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/);
export const ISOTZDateStruct = () => pattern(string(), /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
export const SYMDDate = pattern(string(), /^\d{4}-\d{2}-\d{2}$/);
export type TYMDDate = Infer<typeof SYMDDate>;

export const CoerceDateTimeStruct = () => coerce(
    date(),
    union([ ISODateStruct(), ISOTZDateStruct() ]),
    (value) => new Date(value)
);

export const DateStruct = () => coerce(date(), SYMDDate, (value) => new Date(value));

export const CoerceISODateStruct = coerce(
    ISODateStruct(),
    union([ date(), string() ]),
    (value) => {
        if (is(value, ISODateStruct())) {
            return value;
        }
        if (is(value, date())) {
            return value.toISOString();
        }
        throw new Error('Could not convert value ('+value+') to ISODate');
    });

export const CoerceISOTZDateStruct = () => coerce(
    ISOTZDateStruct(),
    union([ date(), string() ]),
    (value) => {
        if (is(value, ISOTZDateStruct())) {
            return value;
        }
        if (is(value, date())) {
            return value.toISOString();
        }
        throw new Error('Could not convert value ('+value+') to ISODate');
    });
*/