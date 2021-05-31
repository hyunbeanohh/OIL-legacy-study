interface User { // 인터페이스 정의 - 상호간의 약속
    age:number,
    name:string
}
// 변수에 인터페이스 활용
var hb: User = {
    age:33,
    name:'hyunbin'
}//hb가 User라는 인터페이스로 정의되어있다.

// 함수에 인터페이스 활용

function getUser(user: User){ // 특정형식을 준수하는 데이터만 받아온다.
    console.log(user)
}
const capt = {
    name:'captin'
}

//getUser(capt) // User인터페이스와 맞지 않기 때문에 오류를 발생한다.

//함수의 스펙(구조)에 인터페이스를 활용
interface Sumfucntion{
    (a:number, b:number):number
}

var sum: Sumfucntion
sum = function (a:number, b:number): number{
    return a+b
}

// 인덱싱, 인덱싱 방식에 대한 인터페이스 정의
interface StringArray {
    [index: number]: string // 배열과 타입은 숫자 반환은 문자
}

var arr: StringArray = ['a','b','c']
//arr[0] = 10 -> 오류

// 딕셔너리 패턴
interface StringRegexDictionary{
    [key:string]: RegExp
}

var obj: StringRegexDictionary = {
    //sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

obj['cssFile'] = 'a' //RegExp 할당이 되어야 함.

Object.keys(obj).forEach(function(value){

})

// 인터페이스 확장
interface Person{
    name: string
    age: number
}

interface Developer extends Person{
    // name: string
    // age: number
    language: string
}

var captain : Developer = {
    language : 'ts',
    age:100,
    name:'hb'
}