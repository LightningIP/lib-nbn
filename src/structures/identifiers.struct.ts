import { define, pattern, string, union } from 'superstruct';
import isUuid from 'is-uuid';

export const AppointmentID = () => pattern(string(), /^APT\d{12}$/);

export const CopperPairID = () => pattern(string(), /^CPI\d{12}$/);

export const PRIID = () => pattern(string(), /^PRI\d{12}$/);

export const POIID = () => pattern(string(), /^\d[A-Z]{3}$/);

export const NTDID = () => pattern(string(), /^NTD\d{12}$/);

export const AVCID = () => pattern(string(), /^AVC\d{12}$/);

export const UUID = () => define<string>('Uuid', (value) =>
  isUuid.v4(value as string),
);
