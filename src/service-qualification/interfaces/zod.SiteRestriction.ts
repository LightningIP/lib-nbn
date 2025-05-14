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
    supportingResource: ISupportingResource.array().optional(),
    supportingProduct: optional(array(ISupportingProduct)),
    notes: optional(array(ISiteRestrictionNote)),
    siteRestrictionError: z.strictObject({
        code: z.string(),
        message: z.string(),
    }).optional(),
    hoursSinceLastUpdate: z.any().optional(),
});
