import { Entity, Enum, Property } from "@mikro-orm/core";
import { ESpeedTierAvailability, ETechnologyType } from "../../../../structures";
import { SiteRestrictionSupportingProductFeature } from "../../SiteRestrictionSupportingProductFeature.entity.wip";
import { ICapacityAvailability } from "../../../interfaces";

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

    @Enum({
        items: () => ESpeedTierAvailability,
        array: true,
        default: [],
        nativeEnumName: 'speed_tier',
    })
    speedTierAvailability: ESpeedTierAvailability[] = [];

}
