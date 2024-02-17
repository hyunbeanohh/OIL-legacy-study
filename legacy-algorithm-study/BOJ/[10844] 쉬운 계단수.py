```
n = int(input())
d = [[1]*10 for _ in range(n+1)] #dp테이블 첫 번째 자리수 1의 경우의수로  초기화
d[1][0] = 0 #첫번째 자리수 가운데 0은 경우의 수가 0임

for i in range(2,n+1):
  for j in range(0,10):
    if j == 0:
      d[i][j] = d[i-1][j+1]
    elif j == 9:
      d[i][j] = d[i-1][j-1]
    else:
      d[i][j] = d[i-1][j-1] + d[i-1][j+1]

print(sum(d[n])%1000000000)
```
