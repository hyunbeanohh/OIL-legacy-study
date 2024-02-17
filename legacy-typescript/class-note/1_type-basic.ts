//기본 문자열 JS
//var str = 'hello';

//TS 문자열 선언
let str: string = 'hello';

//TS 숫자형 선언
let num: number = 1;

// TS 배열 선언
let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['hyunbin','suhyun']
let items:number[] = [1,2,3]

//TS 튜플 배열의 각각 인덱스의 타입이 정해져있다.
let address: [string,number] = ['gangnam',123]

//TS 객체
let obj: object = {}
// let person: object ={
//     name:'capt',
//     age:100
// }
let person: {name:string, age:number} = {
    name : 'cpat',
    age : 100
}

//TS 진위값
//let show = true;
let show: boolean = true
