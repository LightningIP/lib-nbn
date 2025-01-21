import { array, Describe, object, optional, string } from "superstruct";
import { SiteRestrictionSupportingProduct } from "../models/SiteRestrictionSupportingProduct.entity";
import { PriorityAssist } from "src/structures";
import { EntityDTO } from "@mikro-orm/core";

type SRSPDTO = EntityDTO<SiteRestrictionSupportingProduct>
type SRSP = Omit<SRSPDTO, 'siteRestriction'>

export const ISupportingProduct: Describe<SRSP> = object({
    id: string(),
    priorityAssist: optional(PriorityAssist()),
    serviceProviderId: optional(string()),
    resourceRef: optional(array(string())),
})