// //함수의 파라미터에 타입을 정의하는 방식
// function sum(a:number,b:number){ 
//     return a+b
// }
// sum(10,20);

//함수의 반환 값에 타입을 정의하는 방식
function add(): number{
    return 10
}

//함수에 타입을 정의하는 방식 
function sum(a:number,b:number): number {
    return a+b
}

sum(10,20) // 30
sum(10,20,30,40) // 불필요한 인자를 넘겨주는것을 잡아준다.

//함수의 옵셔널 파라미터 (선택적  파라미터) 추가적으로 들어올 수 있는 파라미터에 대해서 정의
function log(a: string, b?:string){
    
}
log('hello world')
log('hello ts', 'abs')