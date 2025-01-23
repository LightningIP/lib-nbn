import { ZCopperPairID, ZSupportingResourceType, ZServiceabilityClass, ZNBNServiceStatus, ZPOTSInterconnectType } from "../../../structures";
import { ICopperBandwidthRates } from "../CopperBandwidthRates";
import { IBandwidthRatesSupported } from "../BandwidthRatesSupported";
import { z } from "zod";

export const ICopperLineResource = z.strictObject({

    id: ZCopperPairID(),
    type: z.literal(ZSupportingResourceType().enum.CopperLineResource),
    version: z.string(),
    
    networkCoexistence: z.boolean(),

    copperPairStatus: ZCopperPairID().optional(),

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