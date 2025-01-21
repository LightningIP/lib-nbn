import {
  Property,
  Entity,
  ManyToOne,
  PrimaryKey,
  Enum,
  ArrayType,
} from '@mikro-orm/core';
import { SiteRestrictionEntity } from './SiteRestriction.entity';
import { PriorityAssistEnum } from 'src/structures';

@Entity()
export class SiteRestrictionSupportingProduct {

  @ManyToOne(() => SiteRestrictionEntity, { hidden: true })
  siteRestriction?: SiteRestrictionEntity;

  @PrimaryKey({ length: 15 })
  id!: string;

  @Enum({
    items: () => PriorityAssistEnum,
    nativeEnumName: 'priority_assist',
    nullable: true
  })
  priorityAssist?: PriorityAssistEnum;

  @Property({ type: ArrayType, nullable: true })
  resourceRef?: string[];

  @Property({ type: 'string', length: 40, nullable: true })
  serviceProviderId?: string;

}
