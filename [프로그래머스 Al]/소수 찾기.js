function solution(n){
 
  const arr = [] ;
  
  for(let i = 0; i< n+1; i+=1){
    arr.push(true);
  }

  for(let i = 2 ;i * i <=n; i+=1){
    if(arr[i]){
      for(let j = i*i; j<=n ; j+=i){
        arr[j] = false;
      }
    }    
  }
  arr.splice(0,2,false,false);

  const result = arr.filter((x)=>{
    return x !== false;
  })
  return result.length;
}

console.log(solution(10000));
