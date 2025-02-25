import { z } from "zod";
import { ZLocationID } from "../structures/struct.LocationID";
import { ZCSAID, ZGNAFID, ZPOIID, ZServiceabilityClass, ZServiceClassDescription } from "../../structures";
import { ZUnitTypeCode } from "../structures/struct.UnitTypeCode";
import { ZServiceClassReason } from "../structures/struct.ServiceClassReason";
import { ZCoatDescriptor } from "../structures/struct.CoatDescriptor";
import { ZRoadTypeCode } from "../structures/struct.RoadTypeCode";
import { ZHFLServiceType } from "../structures/struct.ServiceType";
import { ZLevelTypeCode } from "../structures/struct.LevelTypeCode";
import { ZRoadSuffixCode } from "../structures/struct.RoadSuffixCode";
import { ZStateTerritoryCode } from "../structures/struct.StateTerritoryCode";
import { ZServiceLevelRegion } from "../structures/struct.ServiceLevelRegion";
import { ZListingType } from "../structures/struct.ListingType";
import { ZTechnologyType } from "../structures/struct.TechnologyType";
import { ZPlannedTechnology } from "../structures/struct.PlannedTechnology";
import { ZCoatReason } from "../structures/struct.CoatReason";


export const IHFLLocation = z.strictObject({
    id: ZLocationID(),
    gnafId: ZGNAFID().nullable(),
    regionId: z.string(),
    areaId: z.string().nullable(),
    formattedAddress: z.string().nonempty(),
    serviceClass: ZServiceabilityClass(),
    serviceClassDescription: ZServiceClassDescription,
    serviceClassReason: ZServiceClassReason.nullable(),
    readyForServiceDate: z.string().date().nullable(),
    disconnectionDate: z.string().date().nullable(),
    unitNumber: z.string({ coerce: true }).nullable(), //z.number().int().nonnegative().or(z.string()).nullable(),
    unitTypeCode: ZUnitTypeCode.nullable(),
    levelNumber: z.string({ coerce: true }).nullable(), //z.number().int().positive().or(z.string()).nullable(),
    levelTypeCode: ZLevelTypeCode.nullable(),
    addressSiteName: z.string().nullable(),
    roadNumber1: z.string({ coerce: true }).nullable(), //z.number().int().nonnegative().or(z.string()).nullable(),
    roadNumber2: z.string({ coerce: true }).nullable(), //z.number().int().nonnegative().or(z.string()).nullable(),
    lotNumber: z.string({ coerce: true }).nullable(), //z.number().int().nonnegative().or(z.string()).nullable(),
    roadName: z.string(),
    roadSuffixCode: ZRoadSuffixCode.nullable(),
    roadTypeCode: ZRoadTypeCode.nullable(),
    localityName: z.string(),
    secondaryComplexName: z.string().nullable(),
    complexRoadNumber1: z.null(),
    complexRoadNumber2: z.null(),
    complexRoadName: z.null(),
    complexRoadTypeCode: z.null(),
    complexRoadSuffixCode: z.null(),
    postcode: z.number().positive().int().nullable(),
    stateTerritoryCode: ZStateTerritoryCode,
    latitude: z.number({ coerce: true }),
    longitude: z.number({ coerce: true }),
    isComplexPremise: z.null(),
    serviceLevelRegion: ZServiceLevelRegion,
    serviceType: ZHFLServiceType,
    listingType: ZListingType,
    technologyType: ZTechnologyType,
    isEarlyAccessAvailable: z.null(),
    poiIdentifier: ZPOIID().or(z.literal('Undefined')),
    poiName: z.string(),
    transitionalPoiId: z.null(),
    transitionalPoiName: z.null(),
    connectivityServicingAreaId: ZCSAID().or(z.literal('Undefined')),
    connectivityServicingAreaName: z.string(),
    transitionalConnectivityServicingAreaId: z.null(),
    transitionalConnectivityServicingAreaName: z.null(),
    newDevelopmentsChargeApplies: z.boolean().nullable(),
    deltaType: z.enum(["Updated", "Created"]).nullable().optional(),
    coexistenceStatus: z.boolean().nullable().optional(),
    lastUpdated: z.date({ coerce: true }),
    isCriticalService: z.null(),
    rtcDate: z.string().date().nullable(),
    samReleaseDate: z.string().date().nullable(),
    plannedTechnology: ZPlannedTechnology.nullable(),
    coatRtcDate: z.string().date().nullable(),
    coatChangeoverDate: z.string().date().nullable(),
    coatReason: ZCoatReason.nullable(),
    coatForecastedRtcDate: z.string().nullable(),
    coatDescriptor: ZCoatDescriptor.nullable(),
});