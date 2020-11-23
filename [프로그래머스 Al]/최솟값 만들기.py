def solution(A,B):
    answer = 0
    A.sort() 정렬 후 
    B.sort(reverse=True) 
    for i,j in zip(A,B): #zip으로 묶은 후 쉽게 해결 가능했다.
        answer += i*j

    return answer

def solution(A,B):
    return sum(a*b for a,b in zip(sorted(A),sorted(B,reverse=True)))
