import { enums } from "superstruct";

export enum ServiceRestorationSLAEnum {
    "Standard" = "Standard",
    "Enhanced - 12 (24/7)" = "Enhanced - 12 (24/7)",
    "Enhanced - 4 (24/7)" = "Enhanced - 4 (24/7)",
}

export const ServiceRestorationSLAArray = Object.values(ServiceRestorationSLAEnum);

export const ServiceRestorationSLA = () => enums(ServiceRestorationSLAArray);