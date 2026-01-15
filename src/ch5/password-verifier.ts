import { info, debug } from "@/lib/complicated-logger";
import { getLogLevel } from "@/lib/configuration-service";
import { oneUpperCaseRule } from "@/lib/rules";

const logLevel = getLogLevel();
const log = (text: string) => {
  if (logLevel === "info") info(text);
  if (logLevel === "debug") debug(text);
}

// const verifyPassword = (input, rules) => {
//   const failed = rules
//     .map((rule) => rule(input))
//     .filter((result => result === false));

//   if (failed.length === 0) {
//     log("PASSED");
//     return true;
//   }
//   log("FAIL");
//   return false;
// }

const verifyPassword = (input, rules) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((({ passed }) => passed === false));

  if (failed.length === 0) {
    return { result: true };
  }
  return { result: false, failed };
}

const { result, failed } = verifyPassword("password", [oneUpperCaseRule])
if (result) {
  log("PASSED")
} else {
  log("Failed")
  failed.map(({ reason }) => console.log(reason))
}