import { z } from 'zod';

export const ZAppointmentID = () => z.string().regex(/^APT\d{12}$/);

export const ZCopperPairID = () => z.string().regex(/^CPI\d{12}$/);

export const ZPRIID = () => z.string().regex(/^PRI\d{12}$/);

export const ZPOIID = () => z.string().regex(/^\d[A-Z]{3}$/);

export const ZAVCID = () => z.string().regex(/^AVC\d{12}$/);

export const ZUUID = () => z.string().uuid();
