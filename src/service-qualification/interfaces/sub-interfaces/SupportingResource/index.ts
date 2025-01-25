import { z } from "zod";
import { ICopperLineResource } from "./CopperLineResource";
import { INTDResource } from "./NTDResource";


export const ISupportingResource = z.discriminatedUnion('type', [
    INTDResource,
    ICopperLineResource,
]);