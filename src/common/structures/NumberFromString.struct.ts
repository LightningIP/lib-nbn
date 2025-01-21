import { coerce, number, string } from "superstruct";

export const NumberFromString = () => {
    return coerce(number(), string(), (v) => parseInt(v));
}
