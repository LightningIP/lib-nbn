import { z } from "zod";

export const ZRoadTypeCode = z.enum([
  "AV", "ST", "RD", "TURN", "DR", "LANE", "HWY", "PDE", "CT", "PL", "TCE", "CCT", 
  "WAY", "CL", "CR", "GR", "BVD", "CIR", "GRA", "GRN", "RTT", "LOOP", "RISE", "RMBL", 
  "ENT", "BYPA", "ESP", "PWY", "WALK", "PASS", "ELB", "CH", "TRL", "VSTA", "GDNS", "COVE", 
  "MNDR", "MEWS", "PROM", "NOOK", "RDGE", "GLEN", "BVDE", "HTS", "ROW", "LINK", "SQ", "CNR", 
  "PATH", "CRST", "ALLY", "BEND", "DVWY", "GTE", "VWS", "PNT", "FAWY", "STRP", "PKT", "HILL", 
  "WYND", "CRSS", "BR", "RIDE", "VIEW", "GLDE", "RTE", "CRCS", "APP", "MALL", "HUB", "CON",
  "BOWL", "WTRS", "OTLK", "QYS", "DOM", "WKWY", "DALE", "ARC", "LKT", "KEY", "OVAL", "PORT",
  "TOR", "FSHR", "PARK", "ESMT", "QY", "BROW", "JNC", "FOLW", "VALE", "CRSG", "CMMN", "AMBL",
  "RUN", "TRK", "REST", "BAY", "PLZA", "END", "BDWY", "CPS", "BRK", "STPS", "CLT", "BANK",
  "BRAE", "LNWY", "QDRT", "DWNS", "STRA", "STAI", "PSGE", "RCH", "GWY", "ID", "SLPE", "EDGE",
  "HTH", "DOCK", "ACCS", "TOP", "FRTG", "TARN", "FWY", "GDN", "RING", "NULL", "KEYS", "SPUR",
  "RES", "EST", "WDS", "CTYD", "CMMNS", "CUTT", "VLLY", "RVR", "RTN", "BWLK", "PWAY", "RDS",
  "MTWY", "BCH", "FORD", "THRU", "RND", "FTRK", "GAP", "EXP", "PRST", "CRSE", "DELL", "WHRF",
  "CSWY", "HVN", "FLAT", "SVWY", "MANR", "CLR", "RDWY", "GLY", "VLLA", "CNWY", "CTR", "SBWY",
  "DSTR", "LDG", "FITR", "EXTN", "LINE", "INLT", "RSNG", "VLGE", "NTH", "TKWY", "INTG", "HLLW",
  "CRK", "CNTN", "RAMP", "FTWY", "OTLT", "DOWN", "CRF", "DIP", "DE", "STRT", "TWIST", "SKLN",
  "PSLA", "FORK", "DASH", "DIV", "BA", "STR", "MEAD", "EAST", "ARTL", "CSO", "BDGE", "LYNN",
  "KNOL", 
]);