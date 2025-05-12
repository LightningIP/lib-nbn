import { z } from "zod";
import { ZLocationID } from "../structures/struct.LocationID";
import { ZUnitTypeCode } from "../structures/struct.UnitTypeCode";
import { ZLevelTypeCode } from "../structures/struct.LevelTypeCode";
import { ZRoadTypeCode } from "../structures/struct.RoadTypeCode";
import { ZRoadSuffixCode } from "../structures/struct.RoadSuffixCode";
import { ZStateTerritoryCode } from "../structures/struct.StateTerritoryCode";


export const ILocationAddress = z.strictObject({
    id: ZLocationID(),

    unitTypeCode: ZUnitTypeCode.nullish(),
    unitNumber: z.string({ coerce: true }).nullish(),
    levelTypeCode: ZLevelTypeCode.nullish(),
    levelNumber: z.string().nullish(),

    lotNumber: z.string().nullish(),
    planNumber: z.string().nullish(),

    secondaryComplexName: z.string().nullish(),
    complexRoadNumber1: z.string().nullish(),
    complexRoadNumber2: z.string().nullish(),
    complexRoadName: z.string().nullish(),
    complexRoadTypeCode: ZRoadTypeCode.nullish(),
    complexRoadSuffixCode: ZRoadSuffixCode.nullish(),

    addressSiteName: z.string().nullish(),
    roadNumber1: z.string().nullish(),
    roadNumber2: z.string().nullish(),
    roadName: z.string().nullish(),
    roadTypeCode: ZRoadTypeCode.nullish(),
    roadSuffixCode: ZRoadSuffixCode.nullish(),

    localityName: z.string().nullish(),
    StateTerritoryCode: ZStateTerritoryCode.nullish(),
    postcode: z.string().nullish(),

    fullAddress: z.string().nullish(),
    formattedAddress: z.string().nullish(),

    geographicDatum: z.string().nullish(),
    latitude: z.number().nullish(),
    longitude: z.number().nullish(),

});