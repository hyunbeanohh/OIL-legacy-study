def solution(nums):
    answer = 0
    length = len(nums)//2
    li = list(set(nums))
    
    for i in li:
        if answer < length:
            answer += 1
    return answer
