import { z } from "zod";

const ZBatteryPowerUnitMonitored = z.enum(['ENABLED']);

export const INTDBatteryBackup = z.strictObject({
    batteryPowerUnit: z.boolean(),
    powerSupplywithBatteryBackupInstallDate: z.string().date(),
    batteryPowerUnitMonitored: ZBatteryPowerUnitMonitored.optional(),
});
