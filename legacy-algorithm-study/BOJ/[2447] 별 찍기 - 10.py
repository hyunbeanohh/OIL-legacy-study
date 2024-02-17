```

def check(n):
  # x,y = (1,4,7) : 3으로 나눈 나머지가 1
  # x,y = (3,4,5) : 3으로 나눈 몫이 1
  arr = []
  for i in range(3*len(n)): # 빈칸을 만드는 조건문
    if i //len(n) == 1:
      arr.append(n[i % len(n)] + " " * len(n)+ n[i % len(n)])
    else:
      arr.append(n[i % len(n)] * 3)
  return (list(arr))

star =["***","* *","***"]
n = int(input())
k = 0

while n != 3:
  n = int(n/3)
  k += 1

for i in range(k):
  star = check(star)
for j in star:
  print(j)
  ```
