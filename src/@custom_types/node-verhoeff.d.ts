declare module 'node-verhoeff';

export function validateAadhaar(aadhaar: string | number): boolean;

export function generateAadhaar(aadhaar: number[]): number;