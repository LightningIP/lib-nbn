import { Entity, Enum, Property } from "@mikro-orm/core";
import { ICapacityAvailability } from "src/service-qualification/sub-interfaces";
import { SiteRestrictionSupportingProductFeature } from "../../SiteRestrictionSupportingProductFeature.entity";
import { ESpeedTierAvailability, ETechnologyType } from "src/structures";


@Entity({
    discriminatorValue: ETechnologyType.NCAS
})
export class NCASProductFeatureEntity extends SiteRestrictionSupportingProductFeature {
    
    constructor() {
        super();
        this.type = ETechnologyType.NCAS;
    }

    @Enum({
        items: () => ETechnologyType,
        nativeEnumName: 'service_type_code',
        primary: true
    })
    type = ETechnologyType.NCAS;

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
