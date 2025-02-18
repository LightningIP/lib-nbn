import { z } from "zod";

export const ZUnitTypeCode = z.enum([
  "UNIT", "HSE", "SE", "ROOM", "SHOP", "ATM", "APT",
  "FCTY", "VLLA", "TNHS", "FLAT", "DUPL", "TNCY", "OFFC",
  "BLDG", "SHED", "WHSE", "REAR", "TEMPORARY", "SITE", "LOT",
  "CTGE", "GATE", "STLL", "KSK", "PTHS", "STU", "ESS",
  "CARP", "ANT", "BLCK", "WKSH", "CARS", "RESV", "GRGE",
  "LSE", "SECURITY", "COMMS", "SEC", "SHRM", "TWR",
  "STOR", "HALL", "RECEPTION", "FIRE ALARM", "LIFT", "OTHER",
  "DATACENTRE", "BTSD", "CLUB", "CAGE", "BNGW", "LOFT", "MBTH",
  "SUBS", "ELEC", "CNT MGMT", "WARD", "MGMT", "SVWY", "SERVER",
  "CCTV", "PLANT", "LBBY", "VLT", "TECHNICAL", "GAS", "FCR",
  "WATER", "STR", "SEC ALARM",
]);