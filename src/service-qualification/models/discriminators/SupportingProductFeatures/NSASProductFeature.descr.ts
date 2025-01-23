import { Entity, Enum, Property } from "@mikro-orm/core";
import { ESpeedTierAvailability, ETechnologyType } from "../../../../structures";
import { IBandwidthAvailability, ICapacityAvailability } from "../../../../service-qualification/sub-interfaces";
import { SiteRestrictionSupportingProductFeature } from "../../SiteRestrictionSupportingProductFeature.entity";


@Entity({
    discriminatorValue: ETechnologyType.NSAS
})
export class NSASProductFeatureEntity extends SiteRestrictionSupportingProductFeature {
    
    constructor() {
        super();
        this.type = ETechnologyType.NSAS;
    }

    @Enum({
        items: () => ETechnologyType,
        nativeEnumName: 'service_type_code',
        primary: true
    })
    type = ETechnologyType.NSAS;

    @Property({ type: 'jsonb', nullable: true })
    capacityAvailability?: (typeof ICapacityAvailability._type)[];

    @Enum({
        items: () => ESpeedTierAvailability,
        array: true,
        default: [],
        nativeEnumName: 'speed_tier',
    })
    speedTierAvailability: ESpeedTierAvailability[] = [];

}
