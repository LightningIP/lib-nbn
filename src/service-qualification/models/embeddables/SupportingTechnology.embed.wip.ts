import { Embeddable, Enum, Property } from "@mikro-orm/core";
import { EAccessTechnology, ServiceabilityClassType } from "../../../structures";

@Embeddable()
export class SupportingTechnologyEntity {

    @Enum({
        items: () => EAccessTechnology,
        nativeEnumName: 'access_technology',
    })
    primaryAccessTechnology!: EAccessTechnology;

    @Property({
        type: 'integer',
        length: 2,
    })
    serviceabilityClass!: ServiceabilityClassType;
    
    @Property({
        type: 'string',
        nullable: true,
    })
    serviceabilityClassReason?: string;

    @Enum({
        items: () => EAccessTechnology,
        nativeEnumName: 'access_technology',
        nullable: true,
    })
    alternativeTechnology?: EAccessTechnology;

    @Property({
        type: 'boolean',
    })
    businessFibre!: boolean;
}
