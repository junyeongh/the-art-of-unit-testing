export type Rule = (input: string) => { passed: boolean; reason: string };
export type VerificationError = `[error] ${string}`;
