import math
def solution(w,h):
    answer = 1
    idx  = 1
    minN = min(w,h)
    
    for i in range(minN,0,-1):
        if w % i == 0 and  h % i == 0:
            idx = i
            break
    answer = w*h-(w+h-idx)  
    return answer
