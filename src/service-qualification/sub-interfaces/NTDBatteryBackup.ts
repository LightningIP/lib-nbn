import { YMDDate } from "src/structures";
import { boolean, coerce, date, enums, object, optional, string } from "superstruct";

export const INTDBatteryBackup = object({
    batteryPowerUnit: boolean(),
    powerSupplywithBatteryBackupInstallDate: YMDDate(),
    batteryPowerUnitMonitored: optional(enums(['ENABLED'])),
})