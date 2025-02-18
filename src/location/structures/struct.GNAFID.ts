import { z } from "zod";

export const ZGNAFID = () => z.string().regex(/^GA(?:NSW|WA_|QLD|VIC|SA_|TAS|ACT|NT_|OT_)\d{9}$/);