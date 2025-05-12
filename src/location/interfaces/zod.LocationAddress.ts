import { z } from "zod";
import { ZLocationID } from "../structures/struct.LocationID";


export const ILocationAddress = z.strictObject({
    id: ZLocationID(),
    formattedAddress: z.string(),
});