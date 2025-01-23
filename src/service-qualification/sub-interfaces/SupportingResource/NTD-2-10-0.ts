
import { ZNTDID, ZNTDLocation, ZNTDPowerType, ZNTDType } from "../../../structures";
import { z } from "zod";
import { INTDBandwidth, ISpeedTiersSupported, IUNIPort } from "../";

const BASE = z.strictObject({
    id: ZNTDID(),
    type: z.literal('NTD'),
    version: z.literal('2.10.0'),
    uniPortD: IUNIPort.array(),
});

const NWAS = BASE.extend({
    NTDLocation: ZNTDLocation(),
    NTDType: ZNTDType(),
    NTDPowerType: ZNTDPowerType(),
    NTDVersion: z.string(),
    NTDBandwidth: INTDBandwidth.array().optional(),
    speedTiersSupported: ISpeedTiersSupported.array(),
});

const NFAS = BASE.extend({
    NTDLocation: ZNTDLocation(),
    NTDType: ZNTDType(),
    NTDPowerType: ZNTDPowerType(),
});

const NHAS = BASE.extend({
    NTDMACAddress: z.string().regex(/^(?:--:){3}(?:[0-9A-Fa-f]{2}[:-]){2}(?:[0-9A-Fa-f]{2})$/),
});

export const ISR_NTD_2100 = z.union([
    BASE,
    NWAS,
    NFAS,
    NHAS,
])