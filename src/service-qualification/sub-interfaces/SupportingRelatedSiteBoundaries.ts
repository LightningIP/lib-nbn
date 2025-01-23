import { z } from "zod";
import { ZCSAID, ZPOIID, ZRegion } from "../../structures";

export const ISupportingRelatedSiteBoundaries = z.strictObject({
    region: ZRegion(),
    CSAId: ZCSAID(),
    poiId: ZPOIID().optional(),
    AETLocation: z.boolean().optional(),
});
