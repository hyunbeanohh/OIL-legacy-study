const point = [1,1,3,2,5];
let dish = 3;
let answer = 0;

function solution(point,dish){

  dish -= 1;
  let s = point.slice();
  s.sort((a,b)=>{
    return a-b;
  });
  
  while(true){
    let p = point.shift();

    if(s[0] === p){
      if(dish === 0){
        break;
      }
      dish -= 1;
      s.shift();
    }else{
      point.push(p);
    if(dish === 0){
      dish = point.length -1;
    }else{
      dish = dish -1;
    }
    }
   answer +=1;
  }
  return answer ;
}
console.log(solution(point,dish));