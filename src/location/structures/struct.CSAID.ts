import { string } from "zod";

export const ZCSAID = () => string().regex(/^CSA\d{12}$/);