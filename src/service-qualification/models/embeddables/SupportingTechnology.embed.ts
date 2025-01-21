import { Embeddable, Enum, Property } from "@mikro-orm/core";
import { AccessTechnologyEnum, ServiceabilityClassType } from "src/structures";

@Embeddable()
export class SupportingTechnologyEntity {

    @Enum({
        items: () => AccessTechnologyEnum,
        nativeEnumName: 'access_technology',
    })
    primaryAccessTechnology!: AccessTechnologyEnum;

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
        items: () => AccessTechnologyEnum,
        nativeEnumName: 'access_technology',
        nullable: true,
    })
    alternativeTechnology?: AccessTechnologyEnum;

    @Property({
        type: 'boolean',
    })
    businessFibre!: boolean;
}
