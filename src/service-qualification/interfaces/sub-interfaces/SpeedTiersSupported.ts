import { z } from "zod";
import { ZFeatureType } from "../../../structures";

export const ISpeedTiersSupported = z.strictObject({
    featureType: ZFeatureType(),
    supported: z.boolean(),
});