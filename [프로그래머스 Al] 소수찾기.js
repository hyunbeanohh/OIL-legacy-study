function solution(numbers){
let answer = 0;
let num = numbers.split('');
let numSet = new Set();
permu(num,'');

function permu(a,s){
  if(s.length > 0){
    if(numSet.has(Number(s))===false){
        numSet.add(Number(s));
        console.log(Number(s));
        if(checkPrime(Number(s))){
          answer++;
        }
    }
  }
  if(a.length >0 ){
    for(let i = 0 ; i< a.length; i++){
      let t = a.slice(0);
      t.splice(i,1);
      console.log(t,s+a[i]);
      permu(t,s+a[i]);
    }
  }
}

function checkPrime(num){
  if(num <2 ) return false;
  if(num ===2) return  true;
    for(let i = 2 ; i<= Math.sqrt(num); i++){
      if(num%i ===0) return false; 
      }
return true;


  }
  return answer ;
}

