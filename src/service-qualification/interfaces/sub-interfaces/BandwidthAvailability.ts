import { number } from "zod";
import { strictObject } from "zod";
import { ZBandwidthType } from "../../structures";
import { ZFeatureType, ZUnitOfMeasure } from "../../../structures";

export const IBandwidthAvailability = strictObject({
    bandwidthType: ZBandwidthType(),
    featureType: ZFeatureType(),
    unitOfMeasure: ZUnitOfMeasure(),
    bandwidth: number(),
});