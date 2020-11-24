n,m= map(int,input().split())

array = []

for i in range(n):
  array.append(int(input()))

d = [10001] * (m+1) #DP테이블 초기화

#다이나믹 프로그래밍 진행
d[0] = 0

for i in range(n): # i = 각각의 화폐 단위
  for j in range(array[i],m+1): # j = 각각의 금액
    if d[j - array[i]] != 10001: # 점화식 i-k원을 만드는 방법이 존재하는 경우
      d[j] = min(d[j],d[j-array[i]]+1)
if d[m] == 10001: #최종적으로 M원을 만드는 방법이 
  print(-1)
else:
  print(d[m])

