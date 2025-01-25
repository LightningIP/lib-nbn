import { z } from "zod";
import { ZFeatureType, ZUnitOfMeasure } from "../../../structures";

export const ICopperBandwidthRates = z.strictObject({
    bandwidthType: z.string(),
    featureType: ZFeatureType(),
    unitOfMeasure: ZUnitOfMeasure(),
    bandwidth: z.number(),
});