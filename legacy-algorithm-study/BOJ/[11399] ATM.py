n = int(input())
data = list(map(int,input().split()))
data.sort()
answer = 0

for i in range(n):
  for j in range(i+1):
    answer += data[j]
    print(data[j])
print(answer)
