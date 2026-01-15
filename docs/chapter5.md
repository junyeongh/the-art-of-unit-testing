# 5장 격리 프레임워크

- **5.1 격리 프레임워크 정의**
  - 이전 장에서의 수동 구현 대신 프레임워크를 사용한 방식
  - *5.1.1 선택하기: 느슨한 타입 대 정적 타입*
- **5.2 동적으로 가짜 모듈 만들기**
  - `configuration-service.json` |> password verifier |> `complicated-logger.js`
  - *5.2.1 제스트 API에 대해 알아 둘 점*
  - *5.2.2 직접 의존성의 추상화 고민*
- **5.3 함수형 스타일의 동적 목과 스텁**
- **5.4 객체 지향 스타일의 동적 목과 스텁**
  - *5.4.1 느슨한 타입의 프레임워크 사용*
  - *5.4.2 타입스크립트에 적합한 프레임워크로 전환*
- **5.5 동적 스텁 설정**
  - *5.5.1 목과 스텁을 사용한 객제 지향 예제*
  - *5.5.2 substitute.js를 사용한 스텁과 목*
- **5.6 격리 프레임워크의 장점과 함정**
  - *5.6.1 대부분의 경우 모의 객체가 필요하지 않다*
  - *5.6.2 읽기 어려운 테스트 코드*
  - *5.6.3 잘못된 대상 검증*
  - *5.6.4 테스트당 하나 이상 목을 사용*
  - *5.6.5 테스트의 과도한 명세화*
- **5.7 요약**

## 5.2에 대한 생각

- 그런데 애초에 `verifyPassword` 내부에 logger 두지 않으면 안 되나?
  - 단순하게
    - `verifyPassword :: (input, rules) => boolean`으로 만드는 대신
    - `verifyPassword :: (input, rules) => Result<success, fail<message>>` 형식으로?
  - 그리고 `logger`는
    - `logger :: text: string => IO(string)` 대신
    - `logger :: (text: string, LogLevel) => IO(string)`을 받으면 더 나은 코드가 아닐까?

```ts
export const oneUpperCaseRule = (input: string) => {
  return {
    passed: input.toLowerCase() !== input,
    reason: "Password must contain at least one uppercase letter.",
  };
};
```

```ts
// 1. 기존 코드
const verifyPassword = (input, rules) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result => result === false));
    
  if (failed.length === 0) {
    log("PASSED");
    return true;
  }
  log("FAIL");
  return false;
}

// result = false
const result = verifyPassword("password", [oneUpperCaseRule])
```

```ts
// 2. 재작성한 코드
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
  log("PASSED");
} else {
  log("Failed");
  failed.map(({ reason }) => console.log(reason));
}
```
