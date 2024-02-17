## 코로나 세계 현황판 만들기

### 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바스크립트 파일에 JSDOC으로 타입 시스템 입히기
<br/>

1. 타입스크립트 프로젝트 생성, 타입스크립트의 기본 환경 구성
    - [x] NPM 초기화
    - [x] 타입스크립트 라이브러리 설치
    - [x] 타입스크립트 설정 파일 생성 및 기본 값 추가
    - [x] 자바스크립트 파일을 타입스크립트 파일로 변환
    - [x] `tsc` 명령어로 타입스크립트 변환해보기 
<br/>

2. 명시적인 `any` 선언하기
    - `tsconfig.json` 파일에 `noImplicitAny` 값을 `true` 추가하기
    - 가능한 구체적인 타입으로 타입 정의
<br/>

3. 프로젝트 환경 구성
    - babel, eslint, prettier 등의 환경 설정
<br/>

4. 외부 라이브라리 모듈화
    - [x] npm i aixos
    - [x] npm i chart.js
    - [x] npm i @types/chart.js
<br/>

5. `strict` 옵션 추가 후 타입 정의
    - [strict 옵션 문서](https://www.typescriptlang.org/tsconfig#strict)

### 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep](https://basarat.gitbook.io/typescript/)