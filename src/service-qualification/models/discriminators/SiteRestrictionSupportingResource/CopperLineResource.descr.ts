import { Entity, Enum, Property } from "@mikro-orm/core";
import { ECopperPairStatus, ENBNServiceStatus, EPOTSInterconnectType, ESupportingResourceType, ServiceabilityClassType } from "../../../../structures";
import { SiteRestrictionSupportingResourceEntity } from "../../SiteRestrictionSupportingResource.entity";
import { IBandwidthRatesSupported, ICopperBandwidthRates } from "../../../interfaces";


@Entity({
  discriminatorValue: ESupportingResourceType.CopperLineResource,
})
export class CopperLineResourceEntity extends SiteRestrictionSupportingResourceEntity {

  constructor() {
    super();
    this.type = ESupportingResourceType.CopperLineResource;
  }

  @Enum({
    items: () => ESupportingResourceType,
    nativeEnumName: 'supporting_resource_type',
  })
  type: ESupportingResourceType.CopperLineResource = ESupportingResourceType.CopperLineResource;

  @Property()
  networkCoexistence!: boolean;

  @Enum({
    items: () => ECopperPairStatus,
    nativeEnumName: 'copper_pair_status',
    nullable: true,
  })
  copperPairStatus?: ECopperPairStatus;

  @Property({ type: 'jsonb', nullable: true })
  bandwidthRatesSupported?: typeof IBandwidthRatesSupported._type[];

  @Property({ type: 'jsonb' })
  copperBandwidthRates!: typeof ICopperBandwidthRates._type[];

  @Property({ type: 'int', length: 2 })
  serviceabilityClass!: ServiceabilityClassType;

  @Property({ nullable: true })
  remediationRequired?: boolean;
  
  @Property()
  subsequentInstallationChargeApplies!: boolean;

  @Enum({
    items: () => ENBNServiceStatus,
    nativeEnumName: 'nbn_service_status',
    nullable: true,
  })
  NBNServiceStatus?: ENBNServiceStatus;

  @Property({ type: 'date', nullable: true, length: 10 })
  lastActiveDate?: string;

  @Property({ nullable: true })
  POTSInterconnect?: string;

  @Enum({
    items: () => EPOTSInterconnectType,
    nativeEnumName: 'pots_interconnect_type',
    nullable: true,
  })
  POTSInterconnectType?: EPOTSInterconnectType;
}
