function solution(brown, yellow) {
    var answer = [];
    
    for(let i = 1 ; i<Math.floor(Math.sqrt(yellow)+1); i++){
        if(yellow % i === 0){
            let j = parseInt(yellow/i,10)
            
            if(2*(i+j)+4 === brown ){
                answer = [j+2,i+2];
            }
        }
        
    }
    return answer;
}
