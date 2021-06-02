function logText(text) {
  console.log(text);
  return text;
}
logText(10); // 숫자 10
logText('hi'); // 문자열 hi
logText(true); // 진위값 true

// 제네렉 기본 문법
function logText2<T>(text: T): T {
  console.log(text);
  return text;
}

logText2<string>('hi'); // 파라미터를 넘기는데 제네릭으로 문자열을 넘기는것을 정의할 수 있다.
logText2<number>(10);

function logText3(text: string) {
  console.log(text);
  text.split('').reverse().join('');
  return text;
}
function logNumber(num: number) {
  console.log(num);
  return num;
}

logText3('a');
logText3(10);
// 타입만 바꾸기 때문에 함수의 중복이 일어나서 유지보수 측면에서 안좋다.

function logText4(text: string | number) {
  // string 과 number의 교집합인 메소드를 프리뷰로 제공한다.
  console.log(text);
  return text;
}
logText4('hi');
logText4(10);
const a = logText4('hi');
//a. -> string|number 의 교집합 메서드만 사용할 수 있다.

function logText5<T>(text: T): T {
  console.log(text);
  return text;
}
const b = logText5<string>('hi');
//b. -> string 메서드 제공
const flag = logText5<boolean>(true);
// 각각 정의하는것 보다 타입을 호출할 때 정의하는 것, 최종 반환 값까지 정의

//인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const obj: Dropdown = { value: 'abc', selected: true };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false }; // value의 값이 string으로 변함.

//제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  // 반환 값을 안넣어도 되지만 명시적으로 넣어주는게 좋음.
  console.log(text.length);
  text.forEach(function (text) {
    // 배열로 명시해줬기 때문에 forEact 제공
    console.log(text);
  });
  return text;
}
logTextLength<string>(['hi']); // 배열로 넘겨줘야함.

// 제네렉 타입 제한 -2 -> 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
  // 추가로 제한된 타입을 줄 수 있다.
  text.length;
  return text;
}
logTextLength2('a'); // 가능
logTextLength2(10); // 불가능
logTextLength2({ length: 10 }); // 정의된 타입을 사용할 수 있다.

// 제네릭 타입 제한3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  // 기존의 정의되어 있는 인터페이스나 클래스를 확장.
  // keyof -> ShoppingItem이 가지고 있는 타입 가운데 한가지만 들어갈 수 있다 . 범위를 줄인다고 볼 수 있음.
  return itemOption;
}
getShoppingItemOption(10);
getShoppingItemOption<string>('a');
getShoppingItemOption('name');
