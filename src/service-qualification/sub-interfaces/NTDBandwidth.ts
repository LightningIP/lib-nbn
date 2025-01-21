import { enums, number, object } from "superstruct";
import { BandwidthType, FeatureType } from "../../structures";

export const INTDBandwidth = object({
    bandwidthType: BandwidthType(),
    featureType: FeatureType(),
    unitOfMeasure: enums(['Kbps', 'Mbps']),
    bandwidth: number(),
});