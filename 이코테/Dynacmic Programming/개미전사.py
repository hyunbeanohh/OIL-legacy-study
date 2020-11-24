N = int(input())
data = list(map(int,input().split()))
d = [0]* 101 # DP 테이블 초기화

d[0] = data[0] 
d[1]= max(data[0],data[1])
for i in range(2,N):
  d[i] = max(d[i-1],d[i-2]+data[i]) # 점화식 토대로 코드 구현
print(d[N-1])
