import { Property, Enum, Entity, ManyToOne } from '@mikro-orm/core';
import { SiteRestrictionEntity } from './SiteRestriction.entity';
import { ESpeedTierAvailability } from 'src/structures';
import { ETechnologyType } from '../../structures/TechnologyType.struct';
import { IBandwidthAvailability, ICapacityAvailability } from '../sub-interfaces';

@Entity({
  tableName: 'site_restriction_supporting_product_feature',
  abstract: true,
  discriminatorColumn: 'type',
})
export abstract class SiteRestrictionSupportingProductFeature {

  @ManyToOne({
    entity: () => SiteRestrictionEntity,
    hidden: true,
    primary: true
  })
  siteRestriction!: SiteRestrictionEntity;

  @Enum({
    items: () => ETechnologyType,
    nativeEnumName: 'service_type_code',
    primary: true
  })
  type!: ETechnologyType;

  @Property()
  version!: string;

  @Property({ nullable: true })
  multicast?: boolean;

  @Property({ type: 'jsonb', nullable: true })
  capacityAvailability?: (typeof ICapacityAvailability._type)[];

  @Enum({
    items: () => ESpeedTierAvailability,
    array: true,
    default: [],
    nullable: true,
    nativeEnumName: 'speed_tier',
  })
  speedTierAvailability?: ESpeedTierAvailability[] = [];

  @Property({ type: 'jsonb', nullable: true })
  bandwidthAvailability?: (typeof IBandwidthAvailability._type)[];

  @Property({ nullable: true })
  TC2?: boolean;

  @Property({ nullable: true })
  TR069UNIV?: boolean;

  @Property({ nullable: true })
  FTPUNIV?: boolean;
}
