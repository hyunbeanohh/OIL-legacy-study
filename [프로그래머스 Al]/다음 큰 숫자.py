def solution(n):
    c = bin(n).count('1') # bin함수를 이용하여 2진수로 변환 후 count 함수를 이용하여 1의 개수 체크
    for m in range(n+1,1000001): # n보다 작으면 안되므로 n+1 부터 입력 받을 수 있는 최대값까지
        if bin(m).count('1') == c: # m을 2진수로 변환 후 count 함수를 이용하여 1의 개수 체크가 2번째 줄과 같다면
            return m #리턴 m
