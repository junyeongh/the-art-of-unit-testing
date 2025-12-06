import dayjs from "dayjs";

const SUNDAY = 0;
const SATURDAY = 6;

export const verifyPassword = (input: string, rules: any): string[] => {
  const dayOfWeek = dayjs().day();
  if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
    throw Error("It's the weekend!");
  }

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
