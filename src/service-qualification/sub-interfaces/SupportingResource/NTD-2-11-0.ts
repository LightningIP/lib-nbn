
import { ZLocationID, ZNTDLocation, ZNTDMACAddress, ZNTDPowerType, ZNTDType, ZNTDID } from "../../../structures";
import { ISpeedTiersSupported, INTDBatteryBackup, IUNIPort, INTDBandwidth } from "../";
import { z } from "zod";

const BASE = z.strictObject({
    id: ZNTDID(),
    type: z.literal('NTD'),
    version: z.literal('2.11.0'),
    uniPortD: IUNIPort.array(),
});

const NWAS = BASE.extend({
    NTDLocation: ZNTDLocation(),
    NTDType: ZNTDType(),
    NTDPowerType: ZNTDPowerType(),
    NTDVersion: z.string().optional(),
    NTDBandwidth: INTDBandwidth.array().optional(),
    speedTiersSupported: ISpeedTiersSupported.array(),
    NTDInstallDate: z.date(),
});

const NFAS = BASE.extend({
    uniPortV: IUNIPort.array().optional(),
    NTDLocation: ZNTDLocation(),
    NTDType: ZNTDType(),
    NTDPowerType: ZNTDPowerType(),
    NTDBatteryBackup: INTDBatteryBackup.optional(),
    NTDInstallDate: z.date().optional(),
    NTDSiteLocation: z.object({
        id: ZLocationID(),
    }).optional(),
});

const NHAS = BASE.extend({
    NTDLocation: ZNTDLocation(),
    NTDType: ZNTDType(),
    NTDMACAddress: ZNTDMACAddress(),
});

const NSAS = BASE.extend({
    antennaDishSize: z.string().optional(),
    NTDLocation: ZNTDLocation(),
    NTDType: ZNTDType(),
    NTDPowerType: ZNTDPowerType(),
    NTDBandwidth: INTDBandwidth.array().optional(),
    NTDInstallDate: z.date().optional(),
});

export const ISR_NTD_2110 = z.union([
    BASE,
    NWAS,
    NFAS,
    NHAS,
    NSAS,
])