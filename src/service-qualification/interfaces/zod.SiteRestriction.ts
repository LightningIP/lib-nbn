import { array, date, optional, z } from "zod";
import { ISiteRestrictionNote, ISupportingProduct, ISupportingProductFeature, ISupportingRelatedLocationFeatures, ISupportingRelatedSiteBoundaries, ISupportingResource, ISupportingTechnology } from "./sub-interfaces";
import { ZLocationID } from "../../location";
import { ZServiceabilityStatus } from "../structures";


export const ISiteRestriction = z.strictObject({
    id: ZLocationID(),
    updatedAt: optional(date()),
    serviceabilityStatus: ZServiceabilityStatus(),
    supportingTechnology: ISupportingTechnology,
    supportingRelatedSiteBoundaries: ISupportingRelatedSiteBoundaries,
    supportingRelatedLocationFeatures: ISupportingRelatedLocationFeatures,
    supportingProductFeatures: optional(array(ISupportingProductFeature)),
    supportingResource: optional(array(ISupportingResource)),
    supportingProduct: optional(array(ISupportingProduct)),
    notes: optional(array(ISiteRestrictionNote)),
});
