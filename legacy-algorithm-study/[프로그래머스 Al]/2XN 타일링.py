def solution(n):
    answer = [0] * 60001
    answer[1] = 1
    answer[2] = 2
    for i in range(3,n+1):
        answer[i] = (answer[i-1]+answer[i-2])%1000000007
    return answer[n]
