import { z } from "zod";
import { ZLocationID } from "../structures/struct.LocationID";
import { ZPOIID, ZServiceabilityClass, ZServiceClassDescription } from "../../structures";
import { ZServiceClassReason } from "../structures/struct.ServiceClassReason";
import { ZCoatDescriptor } from "../structures/struct.CoatDescriptor";
import { ZStateTerritoryCode } from "../structures/struct.StateTerritoryCode";
import { ZServiceLevelRegion } from "../structures/struct.ServiceLevelRegion";
import { ZTechnologyType } from "../structures/struct.TechnologyType";
import { ZPlannedTechnology } from "../structures/struct.PlannedTechnology";
import { ZCoatReason } from "../structures/struct.CoatReason";


export const IMapLocations = z.strictObject({
    id: ZLocationID(),
    formattedAddress: z.string().nonempty(),

    /**
     * The service class, in numeric form, which describes the state of a serviceable location.
     */
    serviceClass: ZServiceabilityClass(),

    /**
     * The service class, in full textual form (e.g. "Serviceable by fibre, no drop or NTD in place").
     */
    serviceClassDescription: ZServiceClassDescription,

    /**
     * Additional descriptive text pertaining to the Service Class when a location is unserviceable.
     */
    serviceClassReason: ZServiceClassReason.nullable(),

    /**
     * The date that nbn was ready to connect end users with Access Seekers within this Rollout Region; In HFL this is actual RFS date and In PFL it is expected RFS date
     */
    readyForServiceDate: z.string().date().nullable(),

    /**
     * The type of nbn™ network access connection
     */
    technologyType: ZTechnologyType,

    /**
     * Indicates that nbn has determined to make a change of access technology
     * at this premises and the technology that is planned. This field is empty
     * if no plans exist or after a change
     */
    plannedTechnology: ZPlannedTechnology.nullable(),

    /**
     * Indicates whether the change was driven by external factors, such as
     * RSPs/end-users paying for a change of technology (labelled as
     * "customer-initiated"), or the result of nbn internal processes (labelled
     * as "nbn-initiated") or part of Fibre Connect program (labelled as
     * "on-demand").
     */
    coatReason: ZCoatReason.nullable(),

    /**
     * A field  to help RSPs identify why a particular location has changed
     * technology, only applicable to nbn-initiated and customer-initiated COAT
     * locations.
     */
    coatDescriptor: ZCoatDescriptor.nullable(),

    localityName: z.string(),
    postcode: z.number().positive().int().nullable(),
    stateTerritoryCode: ZStateTerritoryCode,
    latitude: z.number({ coerce: true }),
    longitude: z.number({ coerce: true }),
    latitudeGrid: z.number({ coerce: true }),
    longitudeGrid: z.number({ coerce: true }),

    /**
     * This field may be used by customers as an indicator of whether the location may be eligible for a New Development Charge upon completion of the first connect order at a New Development Location, as defined under the WBA. This field will be blank in PFL.
     */
    newDevelopmentsChargeApplies: z.boolean().nullable(),

    /**
     * The nbn service level application to this serviceable location
     */
    serviceLevelRegion: ZServiceLevelRegion,

    poiIdentifier: ZPOIID().or(z.literal('Undefined')),
    poiName: z.string(),
    
    
    /**
     * Indicates whether a premises is subject to the 'Co-existence Period' as outlined in the WBA.
     */
    coexistenceStatus: z.boolean().nullable().optional(),

    lastUpdated: z.date({ coerce: true }),
    
    /**
     * A premises is Ready to Connect when an nbn service order can be placed, and the service can be connected within an area that has been declared SRD.
     */
    rtcDate: z.string().date().nullable(),

    /**
     * The date at which the change of access technology build was completed and HFL values of Service Class, Service Class Description, Service Type and Technology Type for this premises were updated.
     */
    coatRtcDate: z.string().date().nullable(),

    /**
     * The date by which all services at the premises must be transitioned to the planned technology or nbn will commence the managed disconnection of services that have not been transitioned.
     */
    coatChangeoverDate: z.string().date().nullable(),

    /**
     * Indicates when nbn is planning to make the Planned Technology ready to connect. This is an indicative date only due to various factors that could affect construction processes.
     */
    coatForecastedRtcDate: z.string().nullable(),
    
});