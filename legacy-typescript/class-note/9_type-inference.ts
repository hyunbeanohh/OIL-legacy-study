//타입 추론 기본

var a = 10;

function getB(b= 10){
    var c = 'hi';
    return b+c;
}

10 + '10' // '1010

//타입 추론 기본2
// interface Dropdown<T>{
//     value : T
//     title:string
// }
// var shoppingItems: Dropdown<string> = {
//     value: '123',
//     title:'123'
// }

// 타입 추론 기본3

interface Dropdown<T>{
    value : T
    title:string
}

interface DetailedDropdown<K> extends Dropdown<K>{
    description : string
    tag: K
    //value ,title을 가지게 됨.
}

var detailedItem: DetailedDropdown<string> ={  // K로 들어가고 Dropdown의 K로 들어감.
    title:'abc',
    description: 'ab',
    value: 'a',
    tag:'c'
}

// Best Common Type
var arr = [1,2,true]; // 여러가지 타입에 대한것을 유니온 타입으로 추론함. 가장 근접한 타입을 추론한다.
