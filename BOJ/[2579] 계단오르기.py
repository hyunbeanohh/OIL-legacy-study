n = int(input())

d = [0 for i in range(301)]
height = [0 for i in range(301)]

#for i in range(n):
  #height = list(map(int,input()))

for i in range(n):
  height[i] = int(input())

d[0] = height[0]
d[1] = height[0]+height[1]
d[2] = max(height[0]+height[2],height[1]+height[2])

for i in range(3,n):
  d[i] = max(height[i]+height[i-1]+d[i-3],height[i]+d[i-2])
print(d[n-1])
