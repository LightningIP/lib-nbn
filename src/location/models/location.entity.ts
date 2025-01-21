import {
  Cascade,
  Entity,
  OneToOne,
  PrimaryKey,
  Ref,
} from '@mikro-orm/core';
import { SiteRestrictionEntity } from 'src/service-qualification/models/SiteRestriction.entity';

@Entity({
  tableName: 'location',
})
export class LocationEntity {

  @PrimaryKey({ length: 15 })
  id!: string;

  /*@OneToOne({
    owner: true,
    orphanRemoval: true,
    nullable: true,
    index: false,
    length: 15,
    entity: () => AddressDetail,
    ref: true,
    cascade: [Cascade.ALL],
  })
  addressDetail?: Ref<AddressDetail>;
  */

  @OneToOne({
    owner: true,
    orphanRemoval: true,
    nullable: true,
    index: false,
    length: 15,
    entity: () => SiteRestrictionEntity,
    ref: true,
    cascade: [Cascade.ALL],
  })
  siteRestriction?: Ref<SiteRestrictionEntity>;

  /*
  @OneToOne({
    owner: true,
    orphanRemoval: true,
    nullable: true,
    index: false,
    length: 15,
    entity: () => PrimaryTechnology,
    ref: true,
    cascade: [Cascade.ALL],
  })
  technologyPlan?: Ref<TechnologyPlan>;
  */

}
