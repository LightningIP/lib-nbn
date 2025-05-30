import { z } from "zod";
import { ZLocationID } from "../structures/struct.LocationID";
import { IAddressDetail } from "../../address-detail/interfaces/iface.AddressDetail";


export const ILocation = z.strictObject({
    id: ZLocationID(),
    addressDetail: IAddressDetail,
})