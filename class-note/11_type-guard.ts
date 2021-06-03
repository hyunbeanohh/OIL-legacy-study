interface Developer{
    name: string
    skill : string
}

interface Person{
    name:string
    age:number
}

function introduce(): Developer | Person { 
    return {name:'hb', age:27,skill:'King Maker'}
}
var p = introduce()
console.log(p.skill) // 유니온 타입은 타입들의 공통된 속성만 접근이 가능하기 때문에 skill은 없는걸로 간주됨.

if((p as Developer).skill){ //타입 단언을 이용한 타입 정의 -> 번거로움 , 코드 가독성이 떨어짐.
    console.log((p as Developer).skill)
}else if((p as Person).age){
    console.log((p as Person).age)
}

//타입 가드 적용

function isDeveloper(target: Developer | Person): target is Developer{ // Developer인지 아닌지 구분. is해당타입으로 정의
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(p)){
    console.log(p.skill)
}else{
    console.log(p.age)
}