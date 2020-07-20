function solution(answers) {
  let answer = [];
  
  let a1 = [1,2,3,4,5];
  let b1 = [2,1,2,3,2,4,2,5];
  let c1 = [3,3,1,1,2,2,4,4,5,5];
  
  function max (a,b){
     if(a>b) return a;
      else return b;
  }
  
  let value = 0;
  let cnt = [0,0,0];
  
  for(let i =0; i<answers.length; i++){
      
      if(a1[i%5] === answers[i]) cnt[0]++;
      if(b1[i%8] === answers[i]) cnt[1]++;
      if(c1[i%10] === answers[i]) cnt[2]++;
      
  }
  
  value = max(max(cnt[0],cnt[1]),cnt[2]);
  
  let idx =0;
  for(let i =0; i<3; i++){
      if(cnt[i] === value){
          answer[idx] = i+1;
          idx += 1;
      }   
  }

  return answer;
}
