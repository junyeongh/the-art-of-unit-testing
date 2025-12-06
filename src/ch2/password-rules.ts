export const oneUpperCaseRule = (input: string) => {
  return {
    passed: input.toLowerCase() !== input,
    reason: "Password must contain at least one uppercase letter.",
  };
};
