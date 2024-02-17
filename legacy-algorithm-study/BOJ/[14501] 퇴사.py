# 현재 상담일자의 이윤 + 현재 상담을 마친 일자부터의 최대 이윤

n = int(input())
t = [] # 각 상담을 완료하는데 걸린 시간
p = [] # 각 상담을 완료했을 때 받을 수 있는 금액
dp = [0] * (n+1)
max_value = 0 # 뒤에서부터 계산할 때 현재까지의 최대 상담 금액에 해당하는 변수

for _ in range(n):
  x,y = map(int,input().split()) # x는 상담에 걸리는 시간 ,  y는 받을 수 있는 금액
  t.append(x)
  p.append(y)

#리스트를 뒤에서 거꾸로 확인
for i in range(n-1,-1,-1):
  time = t[i] + i
  # 상담이 기간안에 끝나는 경우
  if time <= n:
    # 점화식에 맞게, 현재까지의 최고 이익 계산
    dp[i] = max(p[i]+dp[time],max_value)
    max_value = dp[i]
  # 상담의 기간을 벗어나는 경우
  else:
    dp[i] =  max_value
print(max_value)
