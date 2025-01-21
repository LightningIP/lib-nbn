import { array, boolean, literal, object, string } from "superstruct";
import { SupportingResourceTypeEnum, IBandwidthRatesSupported, ICopperBandwidthRates } from "../";
import { CopperPairID, NBNServiceStatus, ServiceabilityClass } from "../../../structures";

export const ISR_CL_280 = object({
    type: literal(SupportingResourceTypeEnum.CopperLineResource),
    id: CopperPairID(),
    version: literal('2.8.0'),
    networkCoexistence: boolean(),
    serviceabilityClass: ServiceabilityClass(),
    subsequentInstallationChargeApplies: boolean(),
    bandwidthRatesSupported: array(IBandwidthRatesSupported),
    copperBandwidthRates: array(ICopperBandwidthRates),
    NBNServiceStatus: NBNServiceStatus(),
});