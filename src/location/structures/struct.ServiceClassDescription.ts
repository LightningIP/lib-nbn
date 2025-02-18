import { z } from "zod";

export const ZServiceClassDescription = z.enum([
  /* 0  */ "Planned to be serviced by fibre (as yet not serviceable)",
  /* 1  */ "Serviceable by fibre, no Drop in place, no NTD",
  /* 2  */ "Serviceable by fibre, Drop in place, no NTD",
  /* 3  */ "Serviceable by fibre, Drop and NTD in place",
    
    "Serviceable by Wireless, NTD installed",
    "Serviceable by Wireless, NTD not installed",
    "Planned to be serviced by Copper (as yet not serviceable)",
    "Serviceable by Copper, no existing Copper Pair in-place, lead-in required",
    "Serviceable by Copper, Existing Copper Pair in-place active with NBN Co.",
    "Serviceable by Copper, Existing Copper Pair in-place not active with NBN Co.",
    "Planned to be served by FTTC (as yet not serviceable)",
    "Serviceable by FTTC but there is no copper path / lead in yet available",
    "Serviceable by FTTC, drop in place, but cut in at DPU is required",
    "Serviceable by FTTC, drop in place, DPU cut in complete, service had been activated",
    "Serviceable by FTTC, drop in place, DPU cut in complete, service had not been activated yet",
    "Serviceable by satellite but no satellite dish / NTD yet in place",
    "Serviced by satellite (dish and NTD in place)",
    "Premises within HFC footprint, but not serviceable.",
    "Premises within HFC footprint, Drop, wall plate and NTD in place",
    "Premises within HFC footprint, no drop, wall plate or NTD",
    "Premises within HFC footprint, drop in place, no wall plate or NTD",
    "Premises within HFC footprint, drop and wall plate in place no NTD ",
    "NBN Co has not yet determined the NBN Co Network footprint that will apply to this address",
    "Within Wireless Boundary (Wireless not in service)",
]);