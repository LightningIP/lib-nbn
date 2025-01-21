import z from 'zod';

export enum EAccessTechnologyEnum {
  'Fibre To The Node' = 'Fibre To The Node',
  'Fibre To The Curb' = 'Fibre To The Curb',
  'Satellite' = 'Satellite',
  'Fibre' = 'Fibre',
  'Wireless' = 'Wireless',
  'HFC' = 'HFC',
  'Fibre To The Building' = 'Fibre To The Building',
}

export const ZAccessTechnology = () => z.nativeEnum(EAccessTechnologyEnum);