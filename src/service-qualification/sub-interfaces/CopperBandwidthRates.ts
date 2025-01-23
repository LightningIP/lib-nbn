import { ZFeatureType, ZUnitOfMeasure } from "../../structures";
import { z } from "zod";

export const ICopperBandwidthRates = z.strictObject({
    bandwidthType: z.string(),
    featureType: ZFeatureType(),
    unitOfMeasure: ZUnitOfMeasure(),
    bandwidth: z.number(),
});