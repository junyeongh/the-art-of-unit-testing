import { oneUpperCaseRule } from "../src/password-rules";

describe("oneUpperCaseRule", () => {
  // it("should fail when there are no uppercase letters", () => {
  //   const result = oneUpperCaseRule("lowercaseonly");

  //   expect(result.passed).toBe(false);
  // });

  // // 1.
  // // it("should pass when there is at least one uppercase letter", () => {
  // //   const result = oneUpperCaseRule("OneUpperCase");
  // //   expect(result.passed).toBe(true);
  // // });

  // // 2.
  // it.each(["Oneuppercase", "Another_one_uppercase"])(
  //   "should pass for valid input: %s",
  //   (input) => {
  //     const result = oneUpperCaseRule(input);
  //     expect(result.passed).toBe(true);
  //   }
  // );

  // 3.
  test.each([
    { input: "lowercaseonly", expected: false },
    { input: "OneUpperCase", expected: true },
    { input: "Another_one_uppercase", expected: true },
  ])(
    "should validate uppercase rule for input: $input",
    ({ input, expected }) => {
      const result = oneUpperCaseRule(input);
      expect(result.passed).toBe(expected);
    }
  );
});
