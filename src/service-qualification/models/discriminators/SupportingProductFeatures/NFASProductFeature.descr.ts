import { Entity, Enum, Property } from "@mikro-orm/core";
import { ESpeedTierAvailability, ETechnologyType } from "../../../../structures";
import { SiteRestrictionSupportingProductFeature } from "../../SiteRestrictionSupportingProductFeature.entity";
import { ICapacityAvailability } from "../../../interfaces";

@Entity({
    discriminatorValue: ETechnologyType.NFAS
})
export class NFASProductFeatureEntity extends SiteRestrictionSupportingProductFeature {
    
    constructor() {
        super();
        this.type = ETechnologyType.NFAS;
    }

    @Enum({
        items: () => ETechnologyType,
        nativeEnumName: 'service_type_code',
        primary: true
    })
    type = ETechnologyType.NFAS;

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
