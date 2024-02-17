import sys
from collections import Counter

n = int(sys.stdin.readline())
data = []
sumtemp = 0

for i in range(n):
 temp = int(sys.stdin.readline())
 data.append(temp)
 sumtemp += temp
print(round(sumtemp/n)) #print('%.0f'% (sumtemp/n))

#n이 1일때는 연산 안해도 됨
if n == 1:
  print(data[0])
  print(data[0])
  print(0)
  sys.exit()

#리스트 정렬
data = sorted(data)
print(data[n//2])

#사전 정렬
cnt = Counter(data)
cnt = sorted(cnt.items(),key=lambda x : (-x[1],x[0]))

#최빈값 출력
if cnt[0][1] == cnt[1][1]:
  print(cnt[1][0])
else:
  print(cnt[0][0])

#범위 출력
print(data[-1]-data[0])
