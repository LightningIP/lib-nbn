import { ZBandwidthType, ZFeatureType, ZUnitOfMeasure } from "../../structures";
import { z } from "zod";

export const INTDBandwidth = z.strictObject({
    bandwidthType: ZBandwidthType(),
    featureType: ZFeatureType(),
    unitOfMeasure: ZUnitOfMeasure(),
    bandwidth: z.number(),
});