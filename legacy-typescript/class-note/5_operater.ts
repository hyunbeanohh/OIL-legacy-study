function logMessage(value: any){
    console.log(value)
}
logMessage('valvalval')
logMessage(100)

// Union Type의 특징
// Union Type: 하나 이상의 타입을 사용할 수 있게해줌.
function logMessage2(value:string | number){ // 타입을 명시적으로 정해주기 때문에 관련 함수들을 바로 가져와서 사용할 수 있음.
    if (typeof value === 'number'){
        value.toLocaleString();
    }
    if (typeof value === 'string'){
        value.big();
    }
    throw new TypeError('value must be string or number..')
}
logMessage('hello')
logMessage(100)

var seho : string | number | boolean;

// Union Type의 장점

interface Developer{
    name:string;
    skill:string;
}
interface Person{
    name:string;
    age:number;
}
function askSomeone(someone: Developer | Person){ 
    // name밖에 접근을 하지 못함 . Developer,Person의 모든 속성을 접근하지 못한다. Why?
    // 타입스크립트 입장에서 검증되지 않은 속성을 사용하면 오류가 날 수 있다고 해석하기 때문에 보장된 속성에 대해서만 제공한다.
    // 접근을 하고 싶다면 '타입가드'를 통해서 접근하도록 한다.
    // 유니온 타입이 실무에서는 더 많이 쓰인다.
    someone.name
    someone.age
    someone.skill
}
askSomeone({name:'디벨로퍼', skill:'웹 개발'})
askSomeone({name: '캡틴', age:100})


// intersection type 
function askSomeone2(someone: Developer & Person){ 
    // Developer와 Person을 합친 하나의 타입이 된다.
    // 인터섹션 타입은 '타입 가드'를 필요로 하지 않고 모든 스펙에 접근이 가능하다.
   someone.name
   someone.age
   someone.skill
}
askSomeone2({name:'디벨로퍼', skill:'웹 개발'}) // 에러
askSomeone2({name: '캡틴', age:100})

askSomeone2({name:'디벨로퍼', skill:'웹 개발', age:100}) // 에러 안남

// 유니온과 인터섹션의 차이는 선택의 차이.