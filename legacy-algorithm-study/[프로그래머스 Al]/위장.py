def solution(brown, yellow):
    answer = []
    for i in range(1,int(yellow**0.5)+1):
        if not yellow % i:
            j = yellow // i
            
            if 2*(i+j) +4 == brown:
                answer = [j+2,i+2]
                
    return answer
