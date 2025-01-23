import {
  Property,
  Entity,
  ManyToOne,
  PrimaryKey,
  Enum,
  BaseEntity,
} from '@mikro-orm/core';
import { SiteRestrictionEntity } from './SiteRestriction.entity';
import { ESupportingResourceType } from '../../structures';

@Entity({
  discriminatorColumn: 'type',
  abstract: true,
  tableName: 'site_restriction_supporting_resource',
})
export abstract class SiteRestrictionSupportingResourceEntity extends BaseEntity {
  
  @ManyToOne({
    entity: () => SiteRestrictionEntity,
    hidden: true
  })
  siteRestriction!: SiteRestrictionEntity;

  @PrimaryKey({ length: 15 })
  id!: string;

  @Enum({
    items: () => ESupportingResourceType,
    nativeEnumName: 'supporting_resource_type',
  })
  type!: ESupportingResourceType;

  @Property({ length: 8 })
  version!: string;

}
