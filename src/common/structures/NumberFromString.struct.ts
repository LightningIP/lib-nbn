import { number } from "zod";

export const NumberFromString = () => number({ coerce: true });