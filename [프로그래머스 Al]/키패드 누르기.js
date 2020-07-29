function calDist(num,lefthand,righthand,pos,handed){
  const X = 0 , Y =1;
  const leftDist = Math.abs(pos[lefthand][X] - pos[num][X]) + Math.abs(pos[lefthand][Y] - pos[num][Y]);
  const rightDist = Math.abs(pos[righthand][X] - pos[num][X]) +Math.abs(pos[righthand][Y] - pos[num][Y]);

  if(leftDist === rightDist )
    return handed === 'right' ? 'R' : 'L';

    return leftDist > rightDist ? 'R' : 'L'; 
}

function solution(numbers,hand){
  let answer = '';
  const HANDED =hand;

  const position = {
    1: [0,0], 2:[0,1], 3:[0,2],
    4: [1,0], 5:[1,1], 6:[1,2],
    7: [2,0], 8:[2,1], 9:[2,2],
    '*':[3,0], 0:[3,1], '#':[3,2]
  };

  let lefthand = '*';
  let righthand = '#';
  
  for(const num of numbers){
    if(num % 3 ===1){
      answer += 'L';
      lefthand = num;
    }else if(num !== 0 && num % 3 ===0){
      answer += 'R';
      righthand = num;
    }else{
      answer += calDist(num,lefthand,righthand,position,HANDED);
      answer[answer.length -1] === 'L' ? lefthand = num : righthand = num;
    }
  }

  return answer ;
}
