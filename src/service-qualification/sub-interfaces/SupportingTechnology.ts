import { AccessTechnology, ServiceabilityClass } from "../../structures";
import { boolean, Describe, object, optional, string } from "superstruct";
import { SupportingTechnologyEntity } from "../models/embeddables/SupportingTechnology.embed";

export const ISupportingTechnology: Describe<SupportingTechnologyEntity> = object({
    primaryAccessTechnology: AccessTechnology(),
    serviceabilityClass: ServiceabilityClass(),
    serviceabilityClassReason: optional(string()),
    alternativeTechnology: optional(AccessTechnology()),
    businessFibre: boolean(),
});