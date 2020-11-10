N = int(input())
data = []
for i in range(N):
  w,h = map(int,input().split())
  data.append((w,h))
#----- 입력 값 ------#

for c in data :
  rank = 1 # 1위로 초기화

  for n in data :
    if  (c[0] != n[0]) & (c[1] != n[1]): # 같지 않음
      if (c[0] < n[0]) & (c[1] < n[1]): # 둘 다 큼 n[0],c[0]은 몸무게 [1]은 키
        rank += 1
  print(rank)
