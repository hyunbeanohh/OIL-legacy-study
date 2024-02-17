import sys
n,m = map(int,sys.stdin.readline().split())
data= list(map(int,sys.stdin.readline().split()))
sum_value = 0
prefix_sum = [0]

for i in data:
  sum_value += i
  prefix_sum.append(sum_value)

for _ in range(m):
  a,b = map(int,sys.sydin.readline().split())
  print(prefix_sum[b] - prefix_sum[a-1])
