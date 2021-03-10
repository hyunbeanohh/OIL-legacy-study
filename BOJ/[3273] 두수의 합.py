"""n = int(input())
data = list(map(int,input().split()))
x = int(input())

count = 0
interval_sum = 0
end = 0

for start in range(n):
  while interval_sum < x and end < n:
    interval_sum += data[end]
    end += 1
  if interval_sum == x:
    count += 1
  interval_sum -= data[start]
print(count)"""

n = int(input())
data = list(map(int,input().split()))
m = int(input())
data.sort()

i = 0
j = len(data) -1
cnt = 0 

while i != j:
  if data[i] + data[j] == m:
    cnt += 1
    i += 1
  elif data[i] + data[j] < m:
    i += 1
  else:
    j -= 1
print(cnt)
