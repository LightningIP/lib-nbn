import { enums, number, object, string } from "superstruct";
import { FeatureType } from "../../structures";

export const ICopperBandwidthRates = object({
    bandwidthType: string(),
    featureType: FeatureType(),
    unitOfMeasure: enums(['Kbps', 'Mbps']),
    bandwidth: number(),
});