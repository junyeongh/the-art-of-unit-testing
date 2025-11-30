import { PasswordVerifier, verifyPassword } from "../src/password-verifier";

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
