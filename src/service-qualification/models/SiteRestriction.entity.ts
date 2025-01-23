
import { Collection, Embedded, Entity, Enum, OneToMany, PrimaryKey, Property } from '@mikro-orm/core'
import { EServiceabilityStatus } from 'src/structures';
import { SupportingTechnologyEntity } from './embeddables/SupportingTechnology.embed';
import { SupportingRelatedSiteBoundariesEntity } from './embeddables/SupportingRelatedSiteBoundaries.embed';
import { ISiteRestrictionNote } from '../sub-interfaces';
import { SupportingRelatedLocationFeatures } from './embeddables/SupportingRelatedLocationFeatures.embed';
import { SiteRestrictionSupportingProduct } from './SiteRestrictionSupportingProduct.entity';
import { SiteRestrictionSupportingResourceEntity } from './SiteRestrictionSupportingResource.entity';

@Entity({
    tableName: 'site_restriction',
})
export class SiteRestrictionEntity {

    @PrimaryKey({ type: 'string', length: 15 })
    id!: string;

    @Property({
        onCreate: () => new Date(),
        onUpdate: () => new Date(),
        hidden: true,
    })
    updatedAt: Date = new Date();
    
    @Property({ name: 'hoursSinceLastUpdate' })
    hoursSinceLastUpdate(): number {
        return this.updatedAt
        ? Math.floor(
            (new Date().getTime() - this.updatedAt.getTime()) / 1000 / 60 / 60,
            )
        : 0;
    }
    
    @Enum({
        items: () => EServiceabilityStatus,
        nativeEnumName: 'serviceability_status',
    })
    serviceabilityStatus!: EServiceabilityStatus;

    @Embedded({
        entity: () => SupportingTechnologyEntity,
        prefix: 'st',
    })
    supportingTechnology!: SupportingTechnologyEntity;

    @Embedded({
        entity: () => SupportingRelatedSiteBoundariesEntity,
        prefix: 'srsb',
    })
    supportingRelatedSiteBoundaries!: SupportingRelatedSiteBoundariesEntity;
    
    @Embedded({
        entity: () => SupportingRelatedLocationFeatures,
        prefix: 'srlf',
    })
    supportingRelatedLocationFeatures!: SupportingRelatedLocationFeatures;
    
    
    //supportingProductFeatures? = new Collection<SiteRestrictionSupportingProductFeature>(this);
    
    @OneToMany(
        () => SiteRestrictionSupportingResourceEntity,
        (supportingResource) => supportingResource.siteRestriction,
        { orphanRemoval: true, eager: true },
    )
    supportingResource? = new Collection<SiteRestrictionSupportingResourceEntity>(this);
    
    @OneToMany(
        () => SiteRestrictionSupportingProduct,
        (supportingProduct) => supportingProduct.siteRestriction,
        { orphanRemoval: true, eager: true },
    )
    supportingProduct? = new Collection<SiteRestrictionSupportingProduct>(this);

    @Property({ type: 'jsonb', nullable: true })
    notes?: (typeof ISiteRestrictionNote._type)[];

}