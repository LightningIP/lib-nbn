import { z } from "zod";
import { ZBandwidthType } from "../../structures";
import { ZFeatureType, ZUnitOfMeasure } from "../../../structures";

export const INTDBandwidth = z.strictObject({
    bandwidthType: ZBandwidthType(),
    featureType: ZFeatureType(),
    unitOfMeasure: ZUnitOfMeasure(),
    bandwidth: z.number(),
});