```
N = int(input())
check = N
new_num = 0
temp = 0
cnt = 0

while True:
  temp = N % 10 + N//10
  new_num = (N %10) * 10 + temp % 10
  cnt += 1
  N = new_num
  if new_num == check:
    break
print(cnt)
```
