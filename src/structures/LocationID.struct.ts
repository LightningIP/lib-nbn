import { z } from "zod";

export const ZLocationID = () => z.string().regex(/^LOC\d{12}$/);
