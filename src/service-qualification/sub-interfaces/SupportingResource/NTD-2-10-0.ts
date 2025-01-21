
import { NTDID, NTDLocation, NTDPowerType, NTDType } from "../../../structures";
import { array, assign, literal, object, optional, pattern, string, union } from "superstruct";
import { INTDBandwidth, ISpeedTiersSupported, IUNIPort } from "../";

const BASE = object({
    id: NTDID(),
    type: literal('NTD'),
    version: literal('2.10.0'),
    uniPortD: array(IUNIPort),
});

const NWAS = assign(BASE, object({
    NTDLocation: NTDLocation(),
    NTDType: NTDType(),
    NTDPowerType: NTDPowerType(),
    NTDVersion: string(),
    NTDBandwidth: optional(array(INTDBandwidth)),
    speedTiersSupported: array(ISpeedTiersSupported),
}));

const NFAS = assign(BASE, object({
    NTDLocation: NTDLocation(),
    NTDType: NTDType(),
    NTDPowerType: NTDPowerType(),
}));

const NHAS = assign(BASE, object({
    NTDMACAddress: pattern(string(), /^(?:--:){3}(?:[0-9A-Fa-f]{2}[:-]){2}(?:[0-9A-Fa-f]{2})$/),
}));

export const ISR_NTD_2100 = union([
    BASE,
    NWAS,
    NFAS,
    NHAS,
])