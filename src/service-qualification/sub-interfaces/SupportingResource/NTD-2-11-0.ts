
import { LocationID, NTDID, NTDLocation, NTDMACAddress, NTDPowerType, NTDType } from "../../../structures";
import { any, array, assign, literal, object, optional, string, union } from "superstruct";
import { CoerceDateTimeStruct } from "src/common/structures/date.struct";
import { ISpeedTiersSupported, INTDBatteryBackup, IUNIPort, INTDBandwidth } from "../";

const BASE = object({
    id: NTDID(),
    type: literal('NTD'),
    version: literal('2.11.0'),
    uniPortD: array(IUNIPort),
});

const NWAS = assign(BASE, object({
    NTDLocation: NTDLocation(),
    NTDType: NTDType(),
    NTDPowerType: NTDPowerType(),
    NTDVersion: optional(string()),
    NTDBandwidth: optional(array(INTDBandwidth)),
    speedTiersSupported: array(ISpeedTiersSupported),
    NTDInstallDate: optional(CoerceDateTimeStruct())
}));

const NFAS = assign(BASE, object({
    uniPortV: optional(array(IUNIPort)),
    NTDLocation: NTDLocation(),
    NTDType: NTDType(),
    NTDPowerType: NTDPowerType(),
    NTDBatteryBackup: optional(INTDBatteryBackup),
    NTDInstallDate: optional(CoerceDateTimeStruct()),
    NTDSiteLocation: union([object({
        id: LocationID(),
    }), any()]),
}));

const NHAS = assign(BASE, object({
    NTDLocation: NTDLocation(),
    NTDType: NTDType(),
    NTDMACAddress: NTDMACAddress(),
}));

const NSAS = assign(BASE, object({
    antennaDishSize: optional(string()),
    NTDLocation: NTDLocation(),
    NTDType: NTDType(),
    NTDPowerType: NTDPowerType(),
    NTDBandwidth: optional(array(INTDBandwidth)),
    NTDInstallDate: optional(CoerceDateTimeStruct())
}));

export const ISR_NTD_2110 = union([
    BASE,
    NWAS,
    NFAS,
    NHAS,
    NSAS,
])