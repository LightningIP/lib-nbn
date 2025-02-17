import { z } from "zod";
import { ZLocationID } from "../structures/struct.LocationID";
import { ZCSAID, ZPOIID, ZServiceabilityClass } from "../../structures";


export const ILocation = z.strictObject({
    id: ZLocationID(),
    gnafId: z.string().regex(/^GA(?:NSW|WA_|QLD|VIC|SA_|TAS|ACT|NT_|OT_)\d{9}$/).nullable(),
    regionId: z.string(),
    areaId: z.string().nullable(),
    formattedAddress: z.string(),
    serviceClass: ZServiceabilityClass(),
    serviceClassDescription: z.enum([
        "Planned to be serviced by fibre (as yet not serviceable)",
        "Serviceable by fibre, Drop in place, no NTD",
        "Serviceable by fibre, Drop and NTD in place",
        "Serviceable by fibre, no Drop in place, no NTD",
        "Serviceable by Wireless, NTD installed",
        "Serviceable by Wireless, NTD not installed",
        "Planned to be serviced by Copper (as yet not serviceable)",
        "Serviceable by Copper, no existing Copper Pair in-place, lead-in required",
        "Serviceable by Copper, Existing Copper Pair in-place active with NBN Co.",
        "Serviceable by Copper, Existing Copper Pair in-place not active with NBN Co.",
        "Planned to be served by FTTC (as yet not serviceable)",
        "Serviceable by FTTC but there is no copper path / lead in yet available",
        "Serviceable by FTTC, drop in place, but cut in at DPU is required",
        "Serviceable by FTTC, drop in place, DPU cut in complete, service had been activated",
        "Serviceable by FTTC, drop in place, DPU cut in complete, service had not been activated yet",
        "Serviceable by satellite but no satellite dish / NTD yet in place",
        "Serviced by satellite (dish and NTD in place)",
        "Premises within HFC footprint, Drop, wall plate and NTD in place",
    ]),
    serviceClassReason: z.enum([
        "BESPOKE CONNECTION REQUIRED",
    ]).nullable(),
    readyForServiceDate: z.string().date().nullable(),
    disconnectionDate: z.string().date().nullable(),
    unitNumber: z.number().int().nonnegative().or(z.string()).nullable(),
    unitTypeCode: z.enum([
        "UNIT", "HSE", "SE", "ROOM", "SHOP", "ATM", "APT",
        "FCTY", "VLLA", "TNHS", "FLAT", "DUPL", "TNCY", "OFFC",
        "BLDG", "SHED", "WHSE", "REAR", "TEMPORARY", "SITE", "LOT",
        "CTGE", "GATE", "STLL", "KSK", "PTHS", "STU", "ESS",
        "CARP", "ANT", "BLCK", "WKSH", "CARS", "RESV", "GRGE",
        "LSE", "SECURITY", "COMMS", "SEC", "SHRM", "TWR",
        "STOR", "HALL", "RECEPTION", "FIRE ALARM", "LIFT", "OTHER",
        "DATACENTRE",
    ]).nullable(),
    levelNumber: z.number().int().positive().or(z.string()).nullable(),
    levelTypeCode: z.enum([
        "L", "G", "FL", "UG", "LG", "B", "P", "M", "LB",
    ]).nullable(),
    addressSiteName: z.string().nullable(),
    roadNumber1: z.number().int().positive().or(z.string()).nullable(),
    roadNumber2: z.number().int().positive().or(z.string()).nullable(),
    lotNumber: z.number().int().nonnegative().or(z.string()).nullable(),
    roadName: z.string(),
    roadSuffixCode: z.enum([
        "W", "E", "S", "N", "EX",
    ]).nullable(),
    roadTypeCode: z.enum([
        "AV", "ST", "RD", "TURN", "DR", "LANE", "HWY", "PDE", "CT", "PL", "TCE", "CCT", 
        "WAY", "CL", "CR", "GR", "BVD", "CIR", "GRA", "GRN", "RTT", "LOOP", "RISE", "RMBL", 
        "ENT", "BYPA", "ESP", "PWY", "WALK", "PASS", "ELB", "CH", "TRL", "VSTA", "GDNS", "COVE", 
        "MNDR", "MEWS", "PROM", "NOOK", "RDGE", "GLEN", "BVDE", "HTS", "ROW", "LINK", "SQ", "CNR", 
        "PATH", "CRST", "ALLY", "BEND", "DVWY", "GTE", "VWS", "PNT", "FAWY", "STRP", "PKT", "HILL", 
        "WYND", "CRSS", "BR", "RIDE", "VIEW", "GLDE", "RTE", "CRCS", "APP", "MALL", "HUB", "CON",
        "BOWL", "WTRS", "OTLK", "QYS", "DOM", "WKWY", "DALE", "ARC", "LKT", "KEY", "OVAL", "PORT",
        "TOR", "FSHR", "PARK", "ESMT", "QY", "BROW", "JNC", "FOLW", "VALE", "CRSG", "CMMN", "AMBL",
        "RUN", "TRK", "REST", "BAY", "PLZA", "END", "BDWY", "CPS", "BRK", "STPS", "CLT", "BANK",
        "BRAE", "LNWY", "QDRT", "DWNS", "STRA", "STAI", "PSGE", "RCH", "GWY", "ID", "SLPE", "EDGE",
        "HTH", "DOCK", "ACCS", "TOP", "FRTG", "TARN", "FWY", "GDN", "RING", "NULL", "KEYS", "SPUR",
        "RES", "EST", "WDS", "CTYD", "CMMNS", "CUTT", "VLLY", "RVR", "RTN", "BWLK", "PWAY", "RDS",
        "MTWY", "BCH", "FORD", "THRU", "RND", "FTRK", "GAP", "EXP", 
    ]).nullable(),
    localityName: z.string(),
    secondaryComplexName: z.string().nullable(),
    complexRoadNumber1: z.null(),
    complexRoadNumber2: z.null(),
    complexRoadName: z.null(),
    complexRoadTypeCode: z.null(),
    complexRoadSuffixCode: z.null(),
    postcode: z.number().positive().int(),
    stateTerritoryCode: z.enum(["QLD", "NSW", "WA", "VIC", "SA", "TAS", "ACT","NT"]),
    latitude: z.number({ coerce: true }),
    longitude: z.number({ coerce: true }),
    isComplexPremise: z.null(),
    serviceLevelRegion: z.enum([
        "URBAN", "REMOTE", "MINOR RURAL", "MAJOR RURAL",
        "LIMITED ACCESS", "ISOLATED",
    ]),
    serviceType: z.enum([
        "Brownfields FIBRE",
        "Greenfields FIBRE",
        "Brownfields HFC",
        "Greenfields FTTN-COPPER",
        "Brownfields FTTN-COPPER",
        "Brownfields FTTB-COPPER",
        "Greenfields FTTC-COPPER",
        "Brownfields FTTC-COPPER",
        "WIRELESS",
        "SATELLITE",
    ]),
    listingType: z.enum(["HFL"]),
    technologyType: z.enum([
        "FIBRE", "WIRELESS", "SATELLITE",
        "HFC", "FIBRE TO THE CURB",
        "FIBRE TO THE NODE", "FIBRE TO THE BUILDING",
    ]),
    isEarlyAccessAvailable: z.null(),
    poiIdentifier: ZPOIID(),
    poiName: z.string(),
    transitionalPoiId: z.null(),
    transitionalPoiName: z.null(),
    connectivityServicingAreaId: ZCSAID(),
    connectivityServicingAreaName: z.string(),
    transitionalConnectivityServicingAreaId: z.null(),
    transitionalConnectivityServicingAreaName: z.null(),
    newDevelopmentsChargeApplies: z.boolean().nullable(),
    deltaType: z.null(),
    lastUpdated: z.date({ coerce: true }),
    isCriticalService: z.null(),
    rtcDate: z.string().date().nullable(),
    samReleaseDate: z.string().date().nullable(),
    plannedTechnology: z.enum([
        "Fibre", "Wireless", "Copper - FTTN", "Satellite",
    ]).nullable(),
    coatRtcDate: z.string().date().nullable(),
    coatChangeoverDate: z.string().date().nullable(),
    coatReason: z.enum(["customer-initiated", "nbn-initiated", "on-demand"]),
    coatForecastedRtcDate: z.string().nullable(),
    coatDescriptor: z.enum([
        "Fixed Wireless and Satellite Upgrade Program",
        "Historical COAT Reasons",
        "Assurance Fibre Upgrade",
        "Network Activity Ticket - Underperforming Lines Flip",
        "Regional Area Flip",
        "Network Proactive Premises Flip",
        "MDU Fibre Upgrade - Residential",
        "MDU Fibre Upgrade - Business",
        "Customer Funded - Individual Premises Flip",
        "Never Connected and Inactive Premises Flip to Fibre",
    ]).nullable(),
})