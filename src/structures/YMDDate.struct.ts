import { assert, define, pattern, refine, string, StructError } from "superstruct";
import { toFailures } from "superstruct/dist/utils";

const YMDDateRegex = /^YYYY-(?:(?:0[1-9]|1[0-2]))-(?:(?:0[1-9]|[12]\d|3[01]))$/;

export const YMDDatePattern = () => pattern(string(), YMDDateRegex);

export const YMDDate = () => define<string>('YYYY-MM-DD Date', (value) => {

    // Check if the value is a string in the correct format
    try {
        assert(value, YMDDatePattern());
    } catch (error) {
        return 'Date must be in the format YYYY-MM-DD';
    }

    // Create a new date object from the string
    const date = new Date(value);

    // Check if the date is valid
    if (!date) {
        return 'Invalid date';
    }

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        return 'Invalid date';
    }

    return true;
})