n = int(input()) #입력받을 개수 
arr = list(map(int,input().split()))#소수인지 판별할 배열 입력

def prime(num): #소수 판별 함수
    if num == 1:
        return False
    elif num == 2:
        return True
    for i in range(2,num):
        if num % i == 0:
            return False
    return True
cnt = 0
for i in arr:
    if prime(i):
        cnt += 1
print(cnt)
