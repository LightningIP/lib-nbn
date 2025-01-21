import { ZLocationID } from "src/location/structures/struct.LocationID";
import { z } from "zod";
import { ZCoatChangeReason, ZReasonCode, ZTechChangeStatus } from "../structures";

export const IAddressDetail = z.strictObject({
    id: ZLocationID(),
    latitude: z.number(),
    longitude: z.number(),
    reasonCode: ZReasonCode(),
    altReasonCode: ZReasonCode().optional(),

    techChangeStatus: ZTechChangeStatus().optional(),

    //programType
    targetEligibilityQuarter: z.string().transform(v => v === 'NA' ? null : v).nullable(),
    //previousTechChangeStatus
    //hstStatus
    //hstSpeedTier
    //changeoverDate
    //patChangeDate:
    patChangeStatus: z.boolean().optional(),
    //techFlip
    serviceType: z.string().optional(),
    serviceStatus: z.string().optional(),
    mduFibreEligibility: z.boolean().optional(),
    //disconnectionStatus
    //disconnectionDate
    //techType
    formattedAddress: z.string(),
    address1: z.string(),
    address2: z.string(),
    locality: z.string().optional(),
    //statusMessage
    frustrated: z.boolean().optional(),
    zeroBuildCost: z.boolean().optional(),
    //wp1DisconnectionDate: optional(CoercedDMYtoYMDDate),
    wp1DisconnectionStatus: z.string().optional(),
    //wp2DisconnectionDate: optional(CoercedDMYtoYMDDate),
    wp2DisconnectionStatus: z.string().optional(),
    //wp3DisconnectionDate: optional(CoercedDMYtoYMDDate),
    wp3DisconnectionStatus: z.string().optional(),
    //wp4DisconnectionDate: optional(CoercedDMYtoYMDDate),
    wp4DisconnectionStatus: z.string().optional(),
    speedTierAvailability: z.boolean().optional(),
    eec: z.number().optional(),
    //changeoverStatus
    forecastedRTC: z.boolean().optional(),
    coatChangeReason: ZCoatChangeReason().optional(),
    cbdpricing: z.boolean().optional(),
    ADA: z.string().optional(),
    ee: z.boolean(),
    TC2SMM: z.boolean().optional(),

    // unsure of order
    greenfields: z.boolean().optional(),
    TC2SMD: z.boolean().optional(),
    TC2SME: z.boolean().optional(),
    businessFibre: z.boolean().optional(),
    mpsid: z.string().optional(),
    serviceabilityMessage: z.string().optional(),

});