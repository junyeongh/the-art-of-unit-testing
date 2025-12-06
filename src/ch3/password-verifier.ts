import { Rule, VerificationError } from "@/types";

const SUNDAY = 0;
const SATURDAY = 6;

const originalDependencies = {
  dayjs: import("dayjs"),
};

let dependencies = { ...originalDependencies };

export const inject = (fakes: any) => {
  Object.assign(dependencies, fakes);
  return function reset() {
    dependencies = { ...originalDependencies };
  };
};

export const verifyPassword = async (input: string, rules: any) => {
  const dayjs = (await dependencies.dayjs).default;
  const dayOfWeek = dayjs().day();

  if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
    throw Error("It's the weekend!");
  }

  const errors: VerificationError[] = [];
  rules.forEach((rule: Rule) => {
    const result = rule(input);
    if (!result.passed) {
      errors.push(`[error] ${result.reason}`);
    }
  });

  return errors;
};

export class PasswordVerifier {
  rules: any;
  dayOfWeek: any;

  constructor(rules: Rule[], dayOfWeekFn: any) {
    this.rules = rules;
    this.dayOfWeek = dayOfWeekFn;
  }

  verify(input: string) {
    if ([SATURDAY, SUNDAY].includes(this.dayOfWeek())) {
      throw Error("It's the weekend!");
    }

    const errors: VerificationError[] = [];
    return errors;
  }
}
