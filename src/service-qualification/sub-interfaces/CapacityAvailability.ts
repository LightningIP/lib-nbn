import { boolean, number, object, optional } from "superstruct";
import { FeatureType, UnitOfMeasure } from "../../structures";

export const ICapacityAvailability = object({
    featureType: FeatureType(),
    capacity: number(),
    unitOfMeasure: UnitOfMeasure(),
    available: optional(boolean()),
    highSpeedNotLessThan: optional(boolean()),
});