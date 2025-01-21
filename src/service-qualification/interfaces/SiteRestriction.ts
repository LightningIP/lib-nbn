import { array, date, Describe, object, optional } from "superstruct";
import { LocationID, ServiceabilityStatus } from "../../structures";
import { ISiteRestrictionNote, ISupportingProduct, ISupportingProductFeature, ISupportingRelatedLocationFeatures, ISupportingRelatedSiteBoundaries, ISupportingResource, ISupportingTechnology } from "../sub-interfaces";
import { SiteRestrictionEntity } from "../models/SiteRestriction.entity";
import { EntityDTO } from "@mikro-orm/core";

type SRDTO = EntityDTO<SiteRestrictionEntity>
type OMMITED = 'updatedAt' | 'hoursSinceLastUpdate' | 'supportingProductFeatures' | 'supportingProduct' | 'supportingResource';
type DESCRIBER = Omit<SRDTO, OMMITED>

export const ISiteRestriction: Describe<DESCRIBER> = object({
    id: LocationID(),
    updatedAt: optional(date()),
    serviceabilityStatus: ServiceabilityStatus(),
    supportingTechnology: ISupportingTechnology,
    supportingRelatedSiteBoundaries: ISupportingRelatedSiteBoundaries,
    supportingRelatedLocationFeatures: ISupportingRelatedLocationFeatures,
    supportingProductFeatures: optional(array(ISupportingProductFeature)),
    supportingResource: optional(array(ISupportingResource)),
    supportingProduct: optional(array(ISupportingProduct)),
    notes: optional(array(ISiteRestrictionNote)),
})
