"""n,m,k = map(int,input().split())
data = list(map(int,input().split()))

data.sort()
first = data[n-1]
second = data[n-2]
answer = 0

count = int(m/ (k+1)) * k
count += m % (k+1)

answer += count * first
answer += (m - count) * second

print(answer) """

2차 풀이 (주석포함하며 코드 해석)

n,m,k = map(int,input().split())
number = list(map(int,input().split()))
number.sort(reverse =True)
first = number[0]
second = number[1]
answer = 0

count = int(m / (k+1)) * k # 반복되는 수열의 수 X k = 가장 큰 수가 등장하는 횟수
count += m %(k+1) # 8항이 나누어 떨어지지 않았을 경우의 수 고려 

answer += count * first #가장 큰 수 더하기
answer += (m - count) * second #두번째로 큰 수 더하기

print(answer)
