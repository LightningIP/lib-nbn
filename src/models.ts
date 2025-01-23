import { LocationEntity } from './location/models/entity.location';
import { CopperLineResourceEntity } from './service-qualification/models/discriminators/SiteRestrictionSupportingResource/CopperLineResource.descr';
import { NTDResourceEntity } from './service-qualification/models/discriminators/SiteRestrictionSupportingResource/NTDResource.desc';
import { NCASProductFeatureEntity } from './service-qualification/models/discriminators/SupportingProductFeatures/NCASProductFeature.descr';
import { NFASProductFeatureEntity } from './service-qualification/models/discriminators/SupportingProductFeatures/NFASProductFeature.descr';
import { NHASProductFeatureEntity } from './service-qualification/models/discriminators/SupportingProductFeatures/NHASProductFeature.descr';
import { NSASProductFeatureEntity } from './service-qualification/models/discriminators/SupportingProductFeatures/NSASProductFeature.descr';
import { NWASProductFeatureEntity } from './service-qualification/models/discriminators/SupportingProductFeatures/NWASProductFeature.descr';
import { SiteRestrictionEntity } from './service-qualification/models/SiteRestriction.entity';
import { SiteRestrictionSupportingProduct } from './service-qualification/models/SiteRestrictionSupportingProduct.entity';
import { SiteRestrictionSupportingProductFeature } from './service-qualification/models/SiteRestrictionSupportingProductFeature.entity';
import { SiteRestrictionSupportingResourceEntity } from './service-qualification/models/SiteRestrictionSupportingResource.entity';

const models = [
    LocationEntity,

    SiteRestrictionEntity,
    SiteRestrictionSupportingProductFeature,
        NFASProductFeatureEntity,
        NWASProductFeatureEntity,
        NSASProductFeatureEntity,
        NHASProductFeatureEntity,
        NCASProductFeatureEntity,
    SiteRestrictionSupportingResourceEntity,
        NTDResourceEntity,
        CopperLineResourceEntity,
    SiteRestrictionSupportingProduct,
]

export default models;

export {
    LocationEntity,

    SiteRestrictionEntity,
    SiteRestrictionSupportingProductFeature,
        NFASProductFeatureEntity,
        NWASProductFeatureEntity,
        NSASProductFeatureEntity,
        NHASProductFeatureEntity,
        NCASProductFeatureEntity,
    SiteRestrictionSupportingResourceEntity,
        NTDResourceEntity,
        CopperLineResourceEntity,
    SiteRestrictionSupportingProduct,
}