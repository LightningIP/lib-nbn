import { Enum, Property } from "@mikro-orm/core";
import { RegionEnum } from "src/structures"

export class SupportingRelatedSiteBoundariesEntity {
    
    @Enum({
        items: () => RegionEnum,
        nativeEnumName: 'region',
    })
    region!: RegionEnum;

    @Property({ length: 15 })
    CSAId!: string;

    @Property({ length: 4, nullable: true })
    poiId?: string;

    @Property({ type: 'boolean', nullable: true })
    AETLocation?: boolean;
    
};