import { union } from "superstruct";
import { ISR_CL_280 } from "./CLR-2-8-0";
import { ISR_CL_2100 } from "./CLR-2-10-0";
import { ISR_NTD_2100 } from "./NTD-2-10-0";
import { ISR_NTD_2110 } from "./NTD-2-11-0";
import { ISR_CL_2110 } from "./CLR-2-11-0";
import { ICopperLineResource } from "./CopperLineResource";


export const ISupportingResource = union([
    ICopperLineResource,
]);