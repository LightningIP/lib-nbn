import { boolean, enums, number, object } from "superstruct";
import { FeatureType } from "../../structures";

export const IBandwidthRatesSupported = object({
    bandwidthRate: number(),
    featureType: FeatureType(),
    unitOfMeasure: enums(['Kbps', 'Mbps']),
    supported: boolean(),
});