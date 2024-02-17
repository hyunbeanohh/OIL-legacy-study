d = [0] * 101
d[0] = 1
d[1] = 1
d[2] = 1

for i in range(0,98):
  d[i+3] = d[i]+d[i+1]
print(d)

num = int(input())
for j in range(num):
  data = int(input())
  print(d[data-1])
