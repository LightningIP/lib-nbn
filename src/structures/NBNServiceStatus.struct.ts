import { enums } from "superstruct";

export enum NBNServiceStatusEnum {
    'Line In Use' = 'Line In Use',
    'Line Not In Use' = 'Line Not In Use',
}

export const NBNServiceStatusArray = Object.values(NBNServiceStatusEnum);

export const NBNServiceStatus = () => enums(NBNServiceStatusArray);