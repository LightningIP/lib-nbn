import { CopperPairID, CopperPairStatus, NBNServiceStatus, POTSInterconnectType, ServiceabilityClass, SupportingResourceType, SupportingResourceTypeEnum, YMDDate } from "../../../structures";
import { array, boolean, Describe, enums, literal, object, optional, string } from "superstruct";
import { ICopperBandwidthRates } from "../CopperBandwidthRates";
import { IBandwidthRatesSupported } from "../BandwidthRatesSupported";
import { EntityDTO } from "@mikro-orm/core";
import { CopperLineResourceEntity } from "src/service-qualification/models/discriminators/SiteRestrictionSupportingResource/CopperLineResource.descr";

type CLRDTO = EntityDTO<CopperLineResourceEntity>;
type DESCRIBER = Omit<CLRDTO, 'siteRestriction'>;

export const ICopperLineResource: Describe<DESCRIBER> = object({

    id: CopperPairID(),
    type: literal(SupportingResourceTypeEnum.CopperLineResource),
    version: string(),
    
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