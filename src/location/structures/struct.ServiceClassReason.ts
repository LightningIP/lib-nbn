import { z } from "zod";

export const ZServiceClassReason = z.enum([
  "PREMISES NOT SERVICEABLE",
  "NOT A PREMISES",
  "LOCATION LITE PREMISES",
  "BESPOKE CONNECTION REQUIRED",
  "COMMERCIAL COMMITMENTS YET TO BE MET",
  "NETWORK INFRASTRUCTURE STILL UNDER CONSTRUCTION",
  "NEW ADDITION TO THE FOOTPRINT - INFRASTRUCTURE WILL REQUIRE DESIGN AND BUILD",
  "FRUSTRATED PREMISES - NBN CO DENIED ACCESS TO INSTALL CRITICAL INFRASTRUCTURE",
  "DDD LITE PREMISES",
  "LOCATION WILL BE SERVICED BY A COMPACT SEALED DSLAM",
  "PREMISES IS A COMMUNICATIONS EQUIPMENT ROOM",
  "ADEQUATELY SERVED AREA - NOT CURRENTLY SERVICED BY NBN",
  "PREMISE HAS NO LINE OF SIGHT WITH SATELLITE BEAM",
  "NBN CO SATELLITE SUPPORT SCHEME PREMISES - NOT YET NBN SERVICEABLE",
  "PREMISES IS IN A WIRELESS 'BLACK-SPOT' WITHIN A WIRELESS SERVING AREA (WSA)",
  "LOCATION DOES NOT MEET MINIMUM SPEED REQUIREMENTS",
  "NOT YET SERVICEABLE, BUT INTENDED FOR FTTC",
]);