// import { log } from "./logger";
import { Rule } from "@/types";
const log = {
  info: (text: string) => {
    console.log(`INFO: ${text}`);
  },
  debug: (text: string) => {
    console.log(`DEBUG: ${text}`);
  },
};

const verifyPassword = (input: string, rules: any) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.count === 0) {
    log.info("PASSED");
    return true;
  }

  log.info("FAILED");
  return false;
};

// const verifyPassword = (...) => {}
/*
inputs: (passwordInput, rules) |> verifyPassword
=> side-effect: log

- input: 하나의 password에 대해서
- input: 여러 조건을 테스트 해서
- output: 비밀번호가 모든 조건을 만족하는지
- 그런데 log도 하고 싶다 (요구 사항: input도 output도 아닌 그 사이)

하나의 password => 각각의 조건을 테스트 하고 로깅을 한다
여기서 구현을 하고 싶은 건 사실 verifyPasswordWithLogger
*/

// Interfaces
export interface ComplicatedLogger {
  info(text: string): string;
  debug(text: string, obj: any): string;
  warn(text: string): string;
  error(text: string, location: string, stacktrace: string): string;
}

export interface Logger {
  info(text: string): string;
}
