import { boolean, number, optional, z } from "zod";
import { ZFeatureType, ZUnitOfMeasure } from "../../../structures";

export const ICapacityAvailability = z.strictObject({
    featureType: ZFeatureType(),
    capacity: number(),
    unitOfMeasure: ZUnitOfMeasure(),
    available: optional(boolean()),
    highSpeedNotLessThan: optional(boolean()),
});