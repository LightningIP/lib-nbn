import { Embedded, Entity, Enum, ManyToOne, Property } from "@mikro-orm/core";
import { ENTDLocation, ENTDPowerType, ENTDType, ESupportingResourceType } from "../../../../structures";
import { SiteRestrictionSupportingResourceEntity } from "../../SiteRestrictionSupportingResource.entity";
import { IUNIPort } from "../../../..//service-qualification/sub-interfaces";
import { NTDBatteryBackup } from "../../embeddables/NTDBatteryBackup.embed";
import { LocationEntity } from "../../../..//location/models/entity.location";


@Entity({
    discriminatorValue: ESupportingResourceType.NTD
})
export class NTDResourceEntity extends SiteRestrictionSupportingResourceEntity {
    
    @Property({ type: 'jsonb', nullable: true })
    uniPortD!: typeof IUNIPort._type[];

    @Property({ type: 'jsonb', nullable: true })
    uniPortV?: typeof IUNIPort._type[];

    @Property({ nullable: true })
    antennaDishSize?: string;

    @Enum({
        items: () => ENTDLocation,
        nativeEnumName: 'ntd_location',
        nullable: true,
    })
    NTDLocation?: ENTDLocation;

    @Enum({
        items: () => ENTDType,
        nativeEnumName: 'ntd_type',
        nullable: true,
    })
    NTDType?: ENTDType;

    @Enum({
        items: () => ENTDPowerType,
        nativeEnumName: 'ntd_power_type',
        nullable: true,
    })
    NTDPowerType?: ENTDPowerType;

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
