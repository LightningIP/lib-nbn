import { z } from "zod";

export enum ETechChangeStatus {
    'Commited' = 'Committed',
    'Committed' = 'Committed',
    'Previous Tech Disconnected' = 'Previous Tech Disconnected',
    'New Tech Connected' = 'New Tech Connected',
    'Planned' = 'Planned',
    'MDU Complex Premises In Build' = 'MDU Complex Premises In Build',
    'Eligible To Order' = 'Eligible To Order',
    'Eligible to Order' = 'Eligible To Order',
    'MDU Complex Eligible To Apply' = 'MDU Complex Eligible To Apply',
    'In Design' = 'In Design',
    'Not Planned' = 'Not Planned',
    'Build Finalised' = 'Build Finalised',
}

export const ZTechChangeStatus = () => z.nativeEnum(ETechChangeStatus);