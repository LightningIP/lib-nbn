import { Entity, Enum, Property } from "@mikro-orm/core";
import { SpeedTierAvailabilityEnum, TechnologyTypeEnum } from "src/structures";
import { ICapacityAvailability } from "src/service-qualification/sub-interfaces";
import { SiteRestrictionSupportingProductFeature } from "../../SiteRestrictionSupportingProductFeature.entity";


@Entity({
    discriminatorValue: TechnologyTypeEnum.NCAS
})
export class NHASProductFeatureEntity extends SiteRestrictionSupportingProductFeature {
    
    constructor() {
        super();
        this.type = TechnologyTypeEnum.NCAS;
    }

    @Enum({
        items: () => TechnologyTypeEnum,
        nativeEnumName: 'service_type_code',
        primary: true
    })
    type = TechnologyTypeEnum.NCAS;

    @Property({ type: 'jsonb', nullable: true })
    capacityAvailability?: (typeof ICapacityAvailability.TYPE)[];

    @Enum({
        items: () => SpeedTierAvailabilityEnum,
        array: true,
        default: [],
        nativeEnumName: 'speed_tier',
    })
    speedTierAvailability: SpeedTierAvailabilityEnum[] = [];

}
