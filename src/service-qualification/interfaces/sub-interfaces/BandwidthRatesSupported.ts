import { z } from "zod";
import { ZFeatureType, ZUnitOfMeasure } from "../../../structures";

export const IBandwidthRatesSupported = z.strictObject({
    bandwidthRate: z.number(),
    featureType: ZFeatureType(),
    unitOfMeasure: ZUnitOfMeasure(),
    supported: z.boolean(),
});