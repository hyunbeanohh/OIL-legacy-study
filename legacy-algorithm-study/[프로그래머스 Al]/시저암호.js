const s = 'BC';
const n = 1;
function solution(s,n){
  let answer = '';
  let strArr = s.split('');
  let arrUp = [];
  let arrDown = [];

  for(let i = 'a'.charCodeAt(); i<='z'.charCodeAt(); i++){
    arrDown.push(String.fromCharCode(i));
  }
  console.log(arrDown)
  for(let i = 'A'.charCodeAt(); i<='Z'.charCodeAt(); i++){
    arrUp.push(String.fromCharCode(i));
  }
  console.log(arrUp);

  strArr.map((element,index)=>{
    if(arrDown.includes(element)){
      let index = arrDown.indexOf(element);
      answer += arrDown[(index +n) % 26];
    }
    if(arrUp.includes(element)){
      let index = arrUp.indexOf(element);
      answer += arrUp[(index +n) % 26];
    }
    if(element === ''){
      answer += '';
    }
    return answer;
  })
 
   

  return answer;
}

console.log(solution(s,n));
