// types.ts

// import modules
import { Issuer } from 'openid-client';

// custom error types
class InvalidIssuerError extends Error {
  public readonly code: number;
  constructor(message: string, code: number = 400) {
    super(message);
    this.code = code;
  }
}

// custom types
export type IssuerType = {
  name: string;
  description: string;
  url: string;
  logo?: string;
  logo_url?: string;
};
export type KeyId = string;
export type Key = Issuer | { issuer: KeyId };
export type Type = Key | KeyId;

// enum
export enum RsaKeySize {
  RSA_1024 = 1024,
  RSA_2048 = 2048,
  RSA_4096 = 4096,
}

// type aliases
type Optional<T> = T | undefined;