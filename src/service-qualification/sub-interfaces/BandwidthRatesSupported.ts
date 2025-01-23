import { ZFeatureType, ZUnitOfMeasure } from "../../structures";
import { z } from "zod";

export const IBandwidthRatesSupported = z.strictObject({
    bandwidthRate: z.number(),
    featureType: ZFeatureType(),
    unitOfMeasure: ZUnitOfMeasure(),
    supported: z.boolean(),
});