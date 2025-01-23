import { ZBandwidthType, ZFeatureType, ZUnitOfMeasure } from "../..//structures";
import { number, object, string } from "zod";
import { strictObject } from "zod";

export const IBandwidthAvailability = strictObject({
    bandwidthType: ZBandwidthType(),
    featureType: ZFeatureType(),
    unitOfMeasure: ZUnitOfMeasure(),
    bandwidth: number(),
});