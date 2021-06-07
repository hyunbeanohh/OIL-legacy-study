const { async } = require("regenerator-runtime");

function fetchData(){
    $.ajax('user/1',function(user){
        console.log(user)
        $.ajax('user2/....')
    });
} // 자바스크립트의 예전 비동기 처리 방식

//fetchData().then().then().catch()

//최신 비동기 처리 -> 비동기 처리를 따로 안해도 됨.
async function fetchData(){
    var user = await $.ajax('user1/');
    console.log(user);
}
