import { ICopperBandwidthRates } from "../CopperBandwidthRates";
import { IBandwidthRatesSupported } from "../BandwidthRatesSupported";
import { z } from "zod";
import { ZCopperPairID, ZCopperPairStatus, ZNBNServiceStatus, ZPOTSInterconnectType, ZServiceabilityClass, ZSupportingResourceType } from "../../../../structures";

export const ICopperLineResource = z.strictObject({

    id: ZCopperPairID(),
    type: z.literal(ZSupportingResourceType().enum.CopperLineResource),
    version: z.string(),
    
    networkCoexistence: z.boolean(),

    copperPairStatus: ZCopperPairStatus().optional(),

    bandwidthRatesSupported: IBandwidthRatesSupported.array().optional(),

    copperBandwidthRates: ICopperBandwidthRates.array(),

    serviceabilityClass: ZServiceabilityClass(),

    remediationRequired: z.boolean().optional(),

    subsequentInstallationChargeApplies: z.boolean(),

    NBNServiceStatus: ZNBNServiceStatus().optional(),

    lastActiveDate: z.string().date().optional(),

    POTSInterconnect: z.string().optional(),

    POTSInterconnectType: ZPOTSInterconnectType().optional(),

});