import {
  Property,
  Entity,
  ManyToOne,
  PrimaryKey,
  Enum,
  ArrayType,
} from '@mikro-orm/core';
import { SiteRestrictionEntity } from './SiteRestriction.entity.wip';
import { EPriorityAssist } from '../../structures';

@Entity()
export class SiteRestrictionSupportingProduct {

  @ManyToOne(() => SiteRestrictionEntity, { hidden: true })
  siteRestriction?: SiteRestrictionEntity;

  @PrimaryKey({ length: 15 })
  id!: string;

  @Enum({
    items: () => EPriorityAssist,
    nativeEnumName: 'priority_assist',
    nullable: true
  })
  priorityAssist?: EPriorityAssist;

  @Property({ type: ArrayType, nullable: true })
  resourceRef?: string[];

  @Property({ type: 'string', length: 40, nullable: true })
  serviceProviderId?: string;

}
