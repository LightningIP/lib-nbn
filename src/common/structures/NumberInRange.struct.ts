import z from "zod";

/**
 * Check if a number is within a range
 * @param min Minimum value
 * @param max Maxumum value
 * @returns 
 */
export const NumberInRange = (min: number, max: number) => {
    return z.number({ coerce: true }).min(min).max(max);
}
