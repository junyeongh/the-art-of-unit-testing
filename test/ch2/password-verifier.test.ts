import { PasswordVerifier } from "@/ch2/password-verifier";
import { describe, expect, it } from "vitest";

describe("PasswordVerifier", () => {
  it("returns error messages for failed rules", () => {
    const verifier = new PasswordVerifier();
    const fakeRule = (input: string) => ({
      passed: false,
      reason: "fake reason",
    });

    verifier.addRule(fakeRule);
    const errors = verifier.verify("any value");

    expect(errors[0]).toMatch("[error] fake reason");
    expect(errors[0]).toContain("fake reason");
  });
});
