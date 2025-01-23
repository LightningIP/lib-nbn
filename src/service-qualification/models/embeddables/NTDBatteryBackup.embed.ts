import { Embeddable, Enum, Property } from '@mikro-orm/core';
import { BatteryPowerUnitMonitoredEnum } from '../../../structures';

@Embeddable()
export class NTDBatteryBackup {
  @Property()
  batteryPowerUnit!: boolean;

  @Property({ type: 'date', nullable: true })
  powerSupplywithBatteryBackupInstallDate?: Date;

  @Enum({
    items: () => BatteryPowerUnitMonitoredEnum,
    nativeEnumName: 'battery_power_unit_monitored',
    nullable: true,
  })
  batteryPowerUnitMonitored?: BatteryPowerUnitMonitoredEnum;
}
