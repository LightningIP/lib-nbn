import { enums } from 'superstruct';

export enum BatteryPowerUnitMonitoredEnum {
  'ENABLED' = 'ENABLED',
  'DISABLED' = 'DISABLED',
}

export const BatteryPowerUnitMonitoredArray = Object.values(BatteryPowerUnitMonitoredEnum);

export const BatteryPowerUnitMonitored = () => enums(BatteryPowerUnitMonitoredArray);
