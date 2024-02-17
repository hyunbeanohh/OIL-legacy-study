import copy

def solution(stones, k):
    left , right = 1 , max(stones)
    
    while left <= right :
        cnt = 0
        check = False
        mid = (left + right )//2
        tmp = copy.deepcopy(stones)
        
        for stone in range(len(tmp)):
            tmp[stone] -= mid 
        
        for i in range(len(tmp)):
            if tmp[i] <= 0:
                cnt += 1
            else:
                cnt = 0
            if cnt >= k:
                check = True
                break
                
        if check is True:
            right = mid - 1
        else:
            left = mid + 1
            
    return left
