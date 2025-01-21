import { boolean, Describe, object, optional } from "superstruct";
import { CSAID, POIID, Region } from "../../structures";
import { SupportingRelatedSiteBoundariesEntity } from "../models/embeddables/SupportingRelatedSiteBoundaries.embed";
import { EntityDTO } from "@mikro-orm/core";

type DESCRIBER = EntityDTO<SupportingRelatedSiteBoundariesEntity>;

export const ISupportingRelatedSiteBoundaries: Describe<DESCRIBER> = object({
    region: Region(),
    CSAId: CSAID(),
    poiId: optional(POIID()),
    AETLocation: optional(boolean()),
});
