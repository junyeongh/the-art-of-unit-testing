export const verifyPassword = (input: string, rules: any): string[] => {
  const errors: string[] = [];
  rules.forEach(
    (rule: (input: string) => { passed: boolean; reason: string }) => {
      const result = rule(input);
      if (!result.passed) {
        errors.push(`[error] ${result.reason}`);
      }
    }
  );

  return errors;
};

export class PasswordVerifier {
  private rules: Array<(input: string) => { passed: boolean; reason: string }> =
    [];

  addRule(rule: (input: string) => { passed: boolean; reason: string }) {
    this.rules.push(rule);
  }

  verify(input: string): string[] {
    const errors: string[] = [];
    this.rules.forEach(
      (rule: (input: string) => { passed: boolean; reason: string }) => {
        const result = rule(input);
        if (!result.passed) {
          errors.push(`[error] ${result.reason}`);
        }
      }
    );

    return errors;
  }
}
