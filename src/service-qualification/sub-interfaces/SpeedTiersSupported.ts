import { FeatureType } from "src/structures";
import { boolean, string, object } from "superstruct";

export const ISpeedTiersSupported = object({
    featureType: FeatureType(),
    supported: boolean(),
});