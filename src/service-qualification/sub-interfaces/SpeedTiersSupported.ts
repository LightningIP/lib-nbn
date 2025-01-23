import { ZFeatureType } from "src/structures";
import { z } from "zod";

export const ISpeedTiersSupported = z.strictObject({
    featureType: ZFeatureType(),
    supported: z.boolean(),
});