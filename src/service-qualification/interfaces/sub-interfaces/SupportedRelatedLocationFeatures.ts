import { boolean, object, optional, string } from "zod";
import { ZNonPremiseLocation } from "../../../structures";

export const ISupportingRelatedLocationFeatures = object({
    newDevelopmentsChargeApplies: boolean(),
    MDU: optional(boolean()),
    inHomeAmplifier: optional(boolean()),
    selfAndRSPProfessionalInstallEligible: optional(boolean()),
    safetyCriticalServiceAlert: optional(boolean()),
    networkBoundaryPoint: optional(string()),
    nonPremiseLocation: optional(ZNonPremiseLocation()),
    antennaDishSize: optional(string()),
})