import { Entity, Enum, Property } from "@mikro-orm/core";
import { CopperPairStatusEnum, NBNServiceStatusEnum, POTSInterconnectTypeEnum, ServiceabilityClass, ServiceabilityClassType, SupportingResourceTypeEnum } from "src/structures";
import { SiteRestrictionSupportingResourceEntity } from "../../SiteRestrictionSupportingResource.entity";
import { IBandwidthRatesSupported, ICopperBandwidthRates } from "src/service-qualification/sub-interfaces";


@Entity({
  discriminatorValue: SupportingResourceTypeEnum.CopperLineResource,
})
export class CopperLineResourceEntity extends SiteRestrictionSupportingResourceEntity {

  constructor() {
    super();
    this.type = SupportingResourceTypeEnum.CopperLineResource;
  }

  @Enum({
    items: () => SupportingResourceTypeEnum,
    nativeEnumName: 'supporting_resource_type',
  })
  type!: SupportingResourceTypeEnum.CopperLineResource;

  @Property()
  networkCoexistence!: boolean;

  @Enum({
    items: () => CopperPairStatusEnum,
    nativeEnumName: 'copper_pair_status',
    nullable: true,
  })
  copperPairStatus?: CopperPairStatusEnum;

  @Property({ type: 'jsonb', nullable: true })
  bandwidthRatesSupported?: typeof IBandwidthRatesSupported.TYPE[];

  @Property({ type: 'jsonb' })
  copperBandwidthRates!: typeof ICopperBandwidthRates.TYPE[];

  @Property({ type: 'int', length: 2 })
  serviceabilityClass!: ServiceabilityClassType;

  @Property({ nullable: true })
  remediationRequired?: boolean;
  
  @Property()
  subsequentInstallationChargeApplies!: boolean;

  @Enum({
    items: () => NBNServiceStatusEnum,
    nativeEnumName: 'nbn_service_status',
    nullable: true,
  })
  NBNServiceStatus?: NBNServiceStatusEnum;

  @Property({ type: 'date', nullable: true, length: 10 })
  lastActiveDate?: string;

  @Property({ nullable: true })
  POTSInterconnect?: string;

  @Enum({
    items: () => POTSInterconnectTypeEnum,
    nativeEnumName: 'pots_interconnect_type',
    nullable: true,
  })
  POTSInterconnectType?: POTSInterconnectTypeEnum;
}
