import { enums } from "superstruct";

export enum ServiceabilityStatusEnum {
    "Serviceable" = "Serviceable",
    "Serviceable - Shortfall" = "Serviceable - Shortfall",
    "Rejected" = "Rejected",
}

export const ServiceabilityStatusArray = Object.values(ServiceabilityStatusEnum);

export const ServiceabilityStatus = () => enums(ServiceabilityStatusArray);