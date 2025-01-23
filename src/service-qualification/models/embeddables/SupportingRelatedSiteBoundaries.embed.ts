import { Enum, Property } from "@mikro-orm/core";
import { ERegion } from "src/structures"

export class SupportingRelatedSiteBoundariesEntity {
    
    @Enum({
        items: () => ERegion,
        nativeEnumName: 'region',
    })
    region!: ERegion;

    @Property({ length: 15 })
    CSAId!: string;

    @Property({ length: 4, nullable: true })
    poiId?: string;

    @Property({ type: 'boolean', nullable: true })
    AETLocation?: boolean;
    
};