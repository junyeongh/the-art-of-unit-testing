import {
  inject,
  verifyPassword,
  PasswordVerifier,
} from "@/ch3/password-verifier";
import { describe, expect, it } from "vitest";

const SATURDAY = 6;
const SUNDAY = 0;
const MONDAY = 1;

const injectData = (newDay: number) => {
  const reset = inject({
    dayjs: Promise.resolve({
      default: () => ({
        day: () => newDay,
      }),
    }),
  });
  return reset;
};

describe("verifyPassword", () => {
  it("throws an error on weekend", async () => {
    const reset = injectData(SATURDAY);

    await expect(verifyPassword("any input", [])).rejects.toThrowError(
      "It's the weekend!"
    );

    reset();
  });
});

describe("PasswordVerifier", () => {
  it("should throw exception", () => {
    const alwaysSunday = () => SUNDAY;
    const verifier = new PasswordVerifier([], alwaysSunday);
    expect(() => verifier.verify("anything")).toThrow("It's the weekend!");
  });

  it("should pass", () => {
    const alwaysMonday = () => MONDAY;
    const verifier = new PasswordVerifier([], alwaysMonday);
    const result = verifier.verify("anything");
    expect(result.length).toBe(0);
  });
});
