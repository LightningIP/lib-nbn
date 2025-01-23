import { ZFeatureType } from "../..//structures";
import { z } from "zod";

export const ISpeedTiersSupported = z.strictObject({
    featureType: ZFeatureType(),
    supported: z.boolean(),
});