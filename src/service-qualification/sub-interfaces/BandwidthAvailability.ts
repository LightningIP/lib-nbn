import { BandwidthType, FeatureType, UnitOfMeasure } from "src/structures";
import { number, object, string } from "superstruct";

export const IBandwidthAvailability = object({
    bandwidthType: BandwidthType(),
    featureType: FeatureType(),
    unitOfMeasure: UnitOfMeasure(),
    bandwidth: number(),
});