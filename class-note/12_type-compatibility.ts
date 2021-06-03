// 인터페이스
interface Developer {
    name: string
    skill: string
}

interface Person {
    name: string
}

var developer : Developer;
var person : Person;

class Person{
    name: string
}

developer = person; // 구조적으로 더 큰 관계에 있어서는 할당이 성립하지 않는다.
developer = new Person() // 타입 별칭을 확인하는것이 아니라 속성을 확인한다.
person = developer;

//함수
var add = function(a: number){
   // ...
}
var sum = function(a:number, b:number){
    // ...
}
add = sum; // add에서는 하나의 인자만 받는다
sum = add;

// 제네릭
interface Empty<T>{
    // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2
empty2 = empty1
// 비어 있기 때문에 양쪽 다 호환이 가능하다.

interface NotEmpty<T>{
    data: T;

}
var notempty1 : NotEmpty<string>;
var notempty2 : NotEmpty<number>;

notempty1 = notempty2
notempty2 = notempty1
// 서로 다른 속성이기 때문에 호환이 되지 않는다.