import { Embeddable, Property, Enum } from '@mikro-orm/core';
import { NonPremiseLocationEnum } from 'src/structures/NonPremiseLocation.struct';

@Embeddable()
export class SupportingRelatedLocationFeatures {

  @Property()
  newDevelopmentsChargeApplies!: boolean;

  @Property({ nullable: true })
  safetyCriticalServiceAlert?: boolean;

  @Property({ nullable: true })
  antennaDishSize?: string;

  @Property({ nullable: true })
  inHomeAmplifier?: boolean;

  @Property({ nullable: true })
  selfAndRSPProfessionalInstallEligible?: boolean;

  @Property({ nullable: true })
  networkBoundaryPoint?: string;

  @Enum({
    items: () => NonPremiseLocationEnum,
    nullable: true,
    nativeEnumName: 'non_premise_location',
  })
  nonPremiseLocation?: NonPremiseLocationEnum;

  @Property({ nullable: true })
  MDU?: boolean;
  
}
