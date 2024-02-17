n,m = map(int,input().split())
data = list(map(int,input().split()))

# 1부터  10까지 담을 수 있는 리스트
d = [0] * 11

for  x in data:
  d[x] += 1

result = 0
# 1부터 m까지의 각 무게에 대하여 처리
for i in range(1,m+1):
  n -= d[i]
  result += d[i]*n

print(result)
