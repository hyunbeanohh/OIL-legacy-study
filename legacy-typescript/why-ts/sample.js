/**
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */

// @ts-check

function sum(a,b){
    return a+b
}

sum(10,'20') // sum(10,'20')의 오류에 대한것을 알려주지 않음. 
             //@ts-check 를 적용하면 ts를 사용한것처럼 나타남
            
