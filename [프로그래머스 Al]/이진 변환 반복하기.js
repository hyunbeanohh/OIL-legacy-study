function solution(s) {
    let zero = 0
    let cnt = 0
    
    while(s !== '1'){
        const temp = [...s].reduce((total,string)=>{
          if(string === '0'){
              zero += 1
              return total
          }  
            return total +1
        },0)
        s = temp.toString(2)
        cnt += 1
    }
    
    return [cnt,zero];
}
