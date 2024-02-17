// 타입 단언

var a;
var b = a; // a가 any이기 때문에 b또한 any이다.

var c;
c = 20;
c = '20';
var d = c as string; // 타입 단언, 개발자가 정의하는 타입으로 간주하게 하는 것.

//DOM API 조작할 때 많이 사용됨.
//<div id = "app"> hi </div>

// var div = document.querySelector('div') 
// if(div){
//     div.innerText
// }


var div = document.querySelector('div') as HTMLElement // 타입 단언을 통해서 div에 대한 메소드를 바로 사용가능.
div.innerText

