function solution(nums) {
    var answer = 0;
    let set = new Set(nums)
    let liset = [...set]
    let len = parseInt((nums.length)/2,10)
    
    for(let i in liset){
        if(answer<len){
            answer++
        }
    }
    return answer;
}
