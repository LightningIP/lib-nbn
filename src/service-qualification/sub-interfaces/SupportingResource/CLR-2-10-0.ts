// @ts-nocheck
import { CopperPairID, CopperPairStatus, NBNServiceStatus, ServiceabilityClass, YMDDate } from "../../../structures";
import { array, boolean, literal, object, optional } from "superstruct";
import { IBandwidthRatesSupported } from "../BandwidthRatesSupported";
import { ICopperBandwidthRates } from "../CopperBandwidthRates";

export const ISR_CL_2100 = object({
    id: CopperPairID(),
    type: literal('CopperLineResource'),
    version: literal('2.10.0'),
    networkCoexistence: boolean(),
    serviceabilityClass: ServiceabilityClass(),
    remediationRequired: optional(boolean()),
    subsequentInstallationChargeApplies: boolean(),
    copperPairStatus: optional(CopperPairStatus()),
    bandwidthRatesSupported: array(IBandwidthRatesSupported),
    copperBandwidthRates: array(ICopperBandwidthRates),
    NBNServiceStatus: optional(NBNServiceStatus()),
    lastActiveDate: optional(YMDDate())
});