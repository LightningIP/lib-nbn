import { refine } from "superstruct";
import { NumberFromString } from "./NumberFromString.struct";

/**
 * Check if a number is within a range
 * @param min Minimum value
 * @param max Maxumum value
 * @returns 
 */
export const NumberInRange = (min: number, max: number) => {
    const name = `NumberInRange(${min}, ${max})`;
    return refine(
        NumberFromString(),
        name,
        (value) => (value >= min && value <= max)
            ? true
            : `Expected a number between ${min} and ${max} on type '${name}', but received ${value}`
    )
}
