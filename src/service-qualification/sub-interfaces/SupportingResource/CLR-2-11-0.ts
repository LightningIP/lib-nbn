import { CopperPairID, CopperPairStatus, NBNServiceStatus, POTSInterconnectType, ServiceabilityClass, YMDDate } from "../../../structures";
import { array, boolean, enums, literal, object, optional, string } from "superstruct";
import { ICopperBandwidthRates } from "../CopperBandwidthRates";
import { IBandwidthRatesSupported } from "../BandwidthRatesSupported";

export const ISR_CL_2110 = object({
    id: CopperPairID(),
    type: literal('CopperLineResource'),
    version: literal('2.11.0'),
    networkCoexistence: boolean(),
    copperPairStatus: optional(CopperPairStatus()),
    bandwidthRatesSupported: optional(array(IBandwidthRatesSupported)),
    copperBandwidthRates: array(ICopperBandwidthRates),
    serviceabilityClass: ServiceabilityClass(),

    remediationRequired: optional(boolean()),
    subsequentInstallationChargeApplies: boolean(),
    NBNServiceStatus: optional(NBNServiceStatus()),
    lastActiveDate: optional(YMDDate()),

    POTSInterconnect: optional(string()),
    POTSInterconnectType: optional(POTSInterconnectType()),
});