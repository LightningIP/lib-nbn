import { ZLocationID } from "../../location";
import { z } from "zod";
import { ZCoatChangeReason, ZReasonCode, ZTechChangeStatus } from "../structures";
import { ZAccessTechnologyCode, ZSpeedTierAvailability } from "../../structures";

export const IAddressDetail = z.strictObject({
    id: ZLocationID(),
    latitude: z.number(),
    longitude: z.number(),
    reasonCode: ZReasonCode(),
    altReasonCode: ZReasonCode().optional(),

    techChangeStatus: ZTechChangeStatus().optional(),

    programType: z.string().nullish(),
    targetEligibilityQuarter: z.string().transform(v => v === 'NA' ? null : v).nullable(),
    previousTechChangeStatus: ZTechChangeStatus().nullish(),
    hstStatus: ZTechChangeStatus().nullish(),
    hstSpeedTier: ZSpeedTierAvailability().nullish(),
    changeoverDate: z.string().date().nullish(),
    patChangeDate: z.string().date().nullish(),
    patChangeStatus: z.boolean().nullish(),
    techFlip: z.boolean().nullish(),
    serviceType: z.string().optional(),
    serviceStatus: z.string().optional(),
    mduFibreEligibility: z.boolean().optional(),
    disconnectionStatus: z.enum(['PAST']).nullish(),
    disconnectionDate: z.string().date().nullish(),
    techType: ZAccessTechnologyCode().nullish(),
    formattedAddress: z.string(),
    address1: z.string(),
    address2: z.string(),
    locality: z.string().optional(),
    statusMessage: z.enum(['connected-true', 'connected']).nullish(),
    frustrated: z.boolean().optional(),
    zeroBuildCost: z.boolean().optional(),
    wp1DisconnectionDate: z.string().date().nullish(),
    wp1DisconnectionStatus: z.string().nullish(),
    wp2DisconnectionDate: z.string().date().nullish(),
    wp2DisconnectionStatus: z.string().nullish(),
    wp3DisconnectionDate: z.string().date().nullish(),
    wp3DisconnectionStatus: z.string().nullish(),
    wp4DisconnectionDate: z.string().date().nullish(),
    wp4DisconnectionStatus: z.string().nullish(),
    speedTierAvailability: z.boolean().optional(),
    eec: z.number().optional(),
    changeoverStatus: z.literal('').nullish(),
    forecastedRTC: z.boolean().nullish(),
    coatChangeReason: ZCoatChangeReason().nullish(),
    cbdpricing: z.boolean().optional(),
    ADA: z.string().nullish(),
    ee: z.boolean(),
    TC2SMM: z.boolean().nullish(),

    // unsure of order
    greenfields: z.boolean().nullish(),
    TC2SMD: z.boolean().nullish(),
    TC2SME: z.boolean().nullish(),
    businessFibre: z.boolean().nullish(),
    mpsid: z.string().nullish(),
    serviceabilityMessage: z.string().nullish(),

    // ignorable
    latitudeGrid: z.number({ coerce: true }).nullish(),
    longitudeGrid: z.number({ coerce: true }).nullish(),
    hoursSinceLastUpdate: z.number().nullish(),

});