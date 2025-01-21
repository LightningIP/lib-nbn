import { Embedded, Entity, Enum, ManyToOne, Property } from "@mikro-orm/core";
import { NTDLocationEnum, NTDPowerTypeEnum, NTDTypeEnum, SupportingResourceTypeEnum } from "src/structures";
import { SiteRestrictionSupportingResourceEntity } from "../../SiteRestrictionSupportingResource.entity";
import { IUNIPort } from "src/service-qualification/sub-interfaces";
import { NTDBatteryBackup } from "../../embeddables/NTDBatteryBackup.embed";
import { LocationEntity } from "src/location/models/entity.location";


@Entity({
    discriminatorValue: SupportingResourceTypeEnum.NTD
})
export class NTDResourceEntity extends SiteRestrictionSupportingResourceEntity {
    
    @Property({ type: 'jsonb', nullable: true })
    uniPortD!: typeof IUNIPort.TYPE[];

    @Property({ type: 'jsonb', nullable: true })
    uniPortV?: typeof IUNIPort.TYPE[];

    @Property({ nullable: true })
    antennaDishSize?: string;

    @Enum({
        items: () => NTDLocationEnum,
        nativeEnumName: 'ntd_location',
        nullable: true,
    })
    NTDLocation?: NTDLocationEnum;

    @Enum({
        items: () => NTDTypeEnum,
        nativeEnumName: 'ntd_type',
        nullable: true,
    })
    NTDType?: NTDTypeEnum;

    @Enum({
        items: () => NTDPowerTypeEnum,
        nativeEnumName: 'ntd_power_type',
        nullable: true,
    })
    NTDPowerType?: NTDPowerTypeEnum;

    @Embedded({
        entity: () => NTDBatteryBackup,
        nullable: true,
    })
    NTDBatteryBackup?: NTDBatteryBackup;

    @Property({ type: 'jsonb', nullable: true })
    NTDBandwidth?: any[];

    @Property({ nullable: true })
    NTDVersion?: string;

    @Property({ type: 'jsonb', nullable: true })
    speedTiersSupported?: any[];

    @Property({ type: 'timestamp', nullable: true })
    NTDInstallDate?: Date;
    
    @Property({ nullable: true })
    NTDMACAddress?: string;

    @ManyToOne(() => LocationEntity, { nullable: true, lazy: true })
    NTDSiteLocation?: LocationEntity;

}
