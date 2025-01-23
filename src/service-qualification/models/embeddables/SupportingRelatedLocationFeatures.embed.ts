import { Embeddable, Property, Enum } from '@mikro-orm/core';
import { ENonPremiseLocation } from 'src/structures/NonPremiseLocation.struct';

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
    items: () => ENonPremiseLocation,
    nullable: true,
    nativeEnumName: 'non_premise_location',
  })
  nonPremiseLocation?: ENonPremiseLocation;

  @Property({ nullable: true })
  MDU?: boolean;
  
}
