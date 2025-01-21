import { boolean, Describe, object, optional, string } from "superstruct";
import { NonPremiseLocation } from "../../structures";
import { SupportingRelatedLocationFeatures } from "../models/embeddables/SupportingRelatedLocationFeatures.embed";
import { EntityDTO } from "@mikro-orm/core";

type DESCRIBER = EntityDTO<SupportingRelatedLocationFeatures>;

export const ISupportingRelatedLocationFeatures: Describe<DESCRIBER> = object({
    newDevelopmentsChargeApplies: boolean(),
    MDU: optional(boolean()),
    inHomeAmplifier: optional(boolean()),
    selfAndRSPProfessionalInstallEligible: optional(boolean()),
    safetyCriticalServiceAlert: optional(boolean()),
    networkBoundaryPoint: optional(string()),
    nonPremiseLocation: optional(NonPremiseLocation()),
    antennaDishSize: optional(string()),
})