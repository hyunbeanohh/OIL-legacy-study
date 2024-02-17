function Person(name,age){
    this.name = name;
    this.age = age
}
var capt = new Person('현빈',100) 
// 클래스와 기능적인 부분에서는 모두 같음.


// ES2015 (ES6)에서 부터 제공된 클래스.
class Person {
    // 클래스 로직
    constructor(name,age){ // 초긱화 메서드
        console.log('생성 완료.')
        this.name = name;
        this.age = age;
    }    
}

var cons = new Person('현빈','27') // 생성 완료. 출력
console.log(cons)

//자바스크립트는 프로토타입 기반의 언어

// var user = {name: 'hb', age: 27}
// var admin = {name: 'hb', age: 27, role:'admin'}
//중복된 코드를 제거하는 것이 프로토타입을 이용한 상속이다.

var user = {name: 'hb', age: 27}
var admin = {}
admin.__proto__ = user; // 프로토타입의 상위에 user를 주겠다.
admin.name
admin.age
admin.role = 'admin' // role 추가
