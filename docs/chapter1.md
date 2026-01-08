# 1장 단위 테스트의 기초

- **1.1 누구에게나 처음은 있다**
  - 단위 테스트와 통합 테스트
- **1.2 단위 테스트 정의**
  - 단위 테스트란? - 단위 + 테스트
    - 테스트
      - 테스트의 대상: 테스트의
        - 주제
        - 시스템
        - 테스트 대상(Suit Under Test)
    - 단위: 시스템 내 작업 단위 / 사용 사례
      - 작업 단위 <- 시작과 끝 = entry point & exit point
      - ! 그러나 함수 내부에서의 다른 함수/모듈/컴포넌트의 호출 => 하나의 작업 단위가 가지는 맥락 (함수 자체보다 큼)
- **1.3 진입점과 종료점**
  - 작업 단위: 하나의 진입점 + 하나 이상의 종료점
  - @ error as value / monad (Maybe나 Either; 특히 Either)
  - @ 작업 단위의 코드 작성 자체의 중요성
    - @ 하나의 함수에 하나의 역할; Single responsibility principle
    - @ 좋은 테스트 코드 작성 이전의 좋은 코드의 중요성 (클린 코드)
  - 예제 1-1:
    - split |> sum: a, b
  - 예제 1-2: mutation 추가
    - split |> sum: a, b & mutation
    - 코드의 설계 방향 - action: query (reference), command (mutation)
  - 예제 1-3: logger 추가 => 의존성 호출
    - split |> sum: a, b & mutation (logger)
    - 의존성이란? => side-effect
- **1.4 종료점 유형**
  - 값 반환
  - state mutation
  - 의존성 (써드 파티) 호출
- **1.5 다른 종료점, 다른 기법**
  - 값 반환: 단순히 input-output 확인
  - state mutation: mutation function에 대한 추가적 확인
  - 의존성 (써드 파티) 호출: mocking으로 확인 가능
- **1.6 처음부터 테스트 코드 작성**
  - (테스트 프레임워크 없이 작성한 기초적인 유닛테스트)
    - helper 함수의 기초적인 구성 방법 및 필요성
      - 왜 필요한가? 테스트의 가독성 및  생산성 향상
- **1.7 좋은 단위 테스트의 특징**
  - *1.7.1 좋은 단위 테스트란*
    - 좋은 단위 테스트의 요소
      - 작성자의 의도를 포함 & 테스트 자체의 의미 => 테스트가 작성된 충분한 맥락이 필요
      - 높은 가독성 및 자동화 제공
      - 멱등성
      - 쉬운 실행과 실패/성공에 대한 직관적인 설명
    - => 좋은 단위 테스트의 특징
      - 빠르고 (<=> 느림)
      - 일관적이고 예측 가능한 결과 (<=> 비일관적이고 예측 불가능)
      - (다른 테스트나 외부 환경과) 독립적으로 (<=> 의존적)
      - 동기적으로 (<=> 비동기적)
    - '스텁'(stub)이란? => mock object?
      - =='토막', '꼬리', '남은 부분'==을 뜻하는 영어 단어로, 여러 분야에서 '미완성된 부분', '다른 것을 대신하는 부분' 등의 의미로 사용
      - 특히 소프트웨어 개발에서 아직 완성되지 않은 기능을 대신하거나, 특정 기능의 동작을 흉내 내는 테스트 스텁 (예: 특정 값 반환)으로 사용
      - (테스트 스텁: 실제 기능 대신, 테스트를 위해 임의의 값을 반환하거나 정해진 동작을 수행하는 코드 조각)
    - 비동기 처리의 동기적 테스트
      - 테스트 내 콜백 함수 호출
      - 비동기 완료까지 대기
  - *1.7.2 단위 테스트 체크리스트*
    - 요약:
      - 좋은 단위 테스트의 요소를 포함하는가?
      - 좋은 단위 테스트의 특징을 갖고 있는가? 또는 역으로 나쁜 단위 테스트의 특징을 포함하는가?
- **1.8 통합 테스트**
  - 통합 테스트란 단위 좋은 단위 테스트 조건을 하나라도 충족하지 못하는 모든 테스트?
    - @ 외부 환경을 포함하는지 포함하지 않는지가 제일 주된 요소인 듯
  - '요약하자면 통한 테스트는 실제 의존성을 사용하고, 단위 테스트는 작업 단위를 의존성에서 격리시켜 항상 일관된 결과를 받을 수 있도록 하여 작업 단위의 모든 측면을 쉽게 조작할 수 있게 한다.'
  - 테스트 자동화의 중요성 <=> 테스트 환경 설정의 중요성
  - 테스트의 핵심: 1. 가독성 2. 유지 보수성 3. 신뢰성
- **1.9 최종 정리**
  - 단위 테스트란:
    - 코드를 통한 자동화를 사용해
      - (하나의) 진입점을 통한 작업 단위의 호출
      - => (하나 이상의) 종료점을 확인
    - 단위 테스트 프레임워크는 쉬운 작성을 도와주고
    - 빠르게 실행되어야한다
    - 좋은 단위 테스트는 **높은 1. 가독성 2. 유지 보수성 3. 신뢰성**을 포함한다
    - 코드의 변경 없이 동일한 결과 보장
- **1.10 테스트 주도 개발**
  - 소프트웨어 개발 중 테스트의 작성 시기에 대한 고민
  - (이 책의 맥락에서) TDD란 테스트 우선 개발
  - *1.10.1 TDD는 단위 테스트의 대체제가 아니다*
    - TDD:
      - 필요한 기능 정의 => 기능 검증을 위한 테스트 작성
      - 테스트를 통과하는 코드 작성 후 리팩토링
        - 구현하고자 하는 기능에 대한 고민
  - *1.10.2 TDD를 잘하는 세 가지 핵심 기법*
    - 좋은 테스트 코드 작성 (이 책의 내용)
    - 테스트 우선 작성
    - 원칙에 따른 설계 (? 무슨 말일까)
- **1.11 요약**
  - [how we write/review code in big tech companies - YouTube](https://www.youtube.com/watch?v=rR4n-0KYeKQ)

```tsx
// 원래 코드
let total = 0;

const totalSoFar = () => {
  return total;
}

const logger = makeLogger();

const sum = (numbers) => {
  const [a, b] = numbers.split(',');

  logger.info("This is a very important log output", {
    firstNumWas: a,
    secondNumWas: b,
  });

  const result = Number.parseInt(a, 10) + Number.parseInt(b, 10);
  total += result;
  return result;
}

// 리팩터링된 코드; 관심사의 분리
const parseNumbers = (numbers) => { // 하나의 작업 단위
  const [a, b] = numbers.split(',');

  return [Number.parseInt(a, 10), Number.parseInt(b, 10)];
}

// const sum = (input) => {
//   const [a, b] = parseNumbers(input);
// 
//   return a + b;
// }

let total = 0;
const sumWithAdditionalBehavior = (input) => {
  const [a, b] = parseNumbers(input);

  // mutation - 하나의 작업 단위; 분리하여 테스트
  const result = a + b트
  total += result;

  // logging - 하나의 작업 단위; 분리하여 테스트
  logger.info("This is a very important log output", {
    firstNumWas: a,
    secondNumWas: b,
  });

  return result;
}
```
