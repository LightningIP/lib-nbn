import { z } from "zod";
import { ZAccessTechnology, ZServiceabilityClass } from "../../../structures";

export const ISupportingTechnology= z.strictObject({
    primaryAccessTechnology: ZAccessTechnology(),
    serviceabilityClass: ZServiceabilityClass(),
    serviceabilityClassReason: z.string().optional(),
    alternativeTechnology: ZAccessTechnology().optional(),
    businessFibre: z.boolean(),
});