import { z } from "zod"

export const ZHFLServiceType = z.enum([
  "Brownfields FIBRE",
  "Greenfields FIBRE",
  "WIRELESS",
  "SATELLITE",
  "Greenfields HFC",
  "Brownfields HFC",
  "Greenfields FTTC-COPPER",
  "Brownfields FTTC-COPPER",
  "Greenfields FTTN-COPPER",
  "Brownfields FTTN-COPPER",
  "Greenfields FTTB-COPPER",
  "Brownfields FTTB-COPPER",
])