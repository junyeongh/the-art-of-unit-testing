import { verifyPassword } from "@/ch3/password-verifier";
import dayjs from "dayjs";
import { describe, expect, it, test } from "vitest";

const SUNDAY = 0;
const SATURDAY = 6;

describe("verifyPassword", () => {
  const TODAY = dayjs().day();
  console.log(TODAY)

  test("on weekends, throws exceptions", () => {
    if ([SATURDAY, SUNDAY].includes(TODAY)) {
      expect(() => verifyPassword("anything", [])).toThrowError(
        "It's the weekend!"
      );
    }
  });

  if ([SATURDAY, SUNDAY].includes(TODAY)) {
    test("on weekends, throws exceptions", () => {
      expect(() => verifyPassword("anything", [])).toThrowError(
        "It's the weekend!"
      );
    });
  }
});
