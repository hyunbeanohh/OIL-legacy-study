n = int(input())
dp = []

for _ in range(n):
  dp.append(list(map(int,input().split())))

for i in range(1,n):
  for j in range(i+1): # 두번째 줄부터 확인
    # 왼쪽 위에서 내려오는 경우
    if j == 0:
      left_up = 0
    else:
      left_up =  dp[i-1][j-1]

    # 바로 위에서 내려오는 경우
    if j == i:
      up = 0
    else:
      up = dp[i-1][j]
    # 최대 합을 저장
    dp[i][j] = dp[i][j] + max(left_up,up)
print(dp)
print(max(dp[n-1]))
