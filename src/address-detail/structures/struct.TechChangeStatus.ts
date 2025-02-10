import { z } from "zod";

export enum ETechChangeStatus {
    'Committed' = 'Committed',
    'Previous Tech Disconnected' = 'Previous Tech Disconnected',
    'New Tech Connected' = 'New Tech Connected',
    'Planned' = 'Planned',
    'MDU Complex Premises In Build' = 'MDU Complex Premises In Build',
    'Eligible To Order' = 'Eligible To Order',
    'MDU Complex Eligible To Apply' = 'MDU Complex Eligible To Apply',
    'In Design' = 'In Design',
    'Not Planned' = 'Not Planned',
    'Build Finalised' = 'Build Finalised',
}

export const ZTechChangeStatus = () => z.preprocess((val) => {
    switch (val) {
        case 'Comited': return 'Committed';
        case 'Eligible to Order': return 'Eligible To Order';
    }
    return val;
}, z.nativeEnum(ETechChangeStatus));