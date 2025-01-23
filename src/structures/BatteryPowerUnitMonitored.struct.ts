import { nativeEnum } from 'zod';

export enum BatteryPowerUnitMonitoredEnum {
  'ENABLED' = 'ENABLED',
  'DISABLED' = 'DISABLED',
}

export const BatteryPowerUnitMonitoredArray = Object.values(BatteryPowerUnitMonitoredEnum);

export const BatteryPowerUnitMonitored = () => nativeEnum(BatteryPowerUnitMonitoredEnum);
