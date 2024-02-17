interface Person {
    name: string
    age: number
}

type Person2 = {
    name:string
    age: number
}

var seho: Person = {
    name: '세호',
    age: 30
}

var hyun: Person2 = {
    name: '현빈',
    age: 27
}

type MyString = string;
var str:MyString = 'hello'

type Todo = {id: string; title:string; done:boolean;}
function getTodo(todo:Todo){

}
//타입은 상세 스펙을 확인할 수 있다.
//인터페이스는 확장이 가능하고 타입은 확장이 불가능하다. 그러므로 인터페이스를 주로 사용하는것이 더 좋다. -> 좋은 소프트웨어는 확장이 가능해야한다. 라는 원칙을 따름.