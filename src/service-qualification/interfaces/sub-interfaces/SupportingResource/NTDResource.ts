
import { z } from "zod";
import { INTDBandwidth } from "../NTDBandwidth";
import { ISpeedTiersSupported } from "../SpeedTiersSupported";
import { IUNIPort } from "../zod.UNIPort";
import { INTDBatteryBackup } from "../NTDBatteryBackup";
import { ZLocationID, ZNTDID, ZNTDLocation, ZNTDMACAddress, ZNTDPowerType, ZNTDType } from "../../../../structures";

const BASE = z.strictObject({
    id: ZNTDID(),
    type: z.literal('NTD'),
    version: z.string(),
    uniPortD: z.strictObject({
        id: z.string(),
        status: z.string(),
    }).array(),

    antennaDishSize: z.string().optional(),
    NTDVersion: z.string().optional(),
    NTDBandwidth: INTDBandwidth.array().optional(),
    NTDInstallDate: z.date().optional(),
    
    NTDBatteryBackup: INTDBatteryBackup.optional(),
    NTDSiteLocation: z.object({
        id: ZLocationID(),
    }).optional(),

    NTDLocation: ZNTDLocation(),
    NTDType: ZNTDType(),
    NTDPowerType: ZNTDPowerType(),
    speedTiersSupported: ISpeedTiersSupported.array().optional(),
    uniPortV: IUNIPort.array().optional(),
    NTDMACAddress: ZNTDMACAddress().optional(),

});

const NWAS = BASE.extend({
});

const NFAS = BASE.extend({
});

const NHAS = BASE.extend({
});

const NSAS = BASE.extend({
});

export const INTDResource = BASE; z.union([
    BASE,
    NWAS,
    NFAS,
    NHAS,
    NSAS,
])