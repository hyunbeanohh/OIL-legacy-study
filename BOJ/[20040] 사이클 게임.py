import sys
def find_parent(parent,x):
    if parent[x] != x:
        parent[x] = find_parent(parent,parent[x])
    return parent[x]

def union_parent(parent,a,b):
    a = find_parent(parent,a)
    b = find_parent(parent,b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

n,m = map(int,sys.stdin.readline().split())
parent = [0] * (n+1)

for i in range(1,n+1):
    parent[i] = i

cycle = False
cnt = 0

for i in range(1,m+1):
  a,b = map(int,sys.stdin.readline().split())
  if find_parent(parent,a) == find_parent(parent,b): # 사이클 발생
    cycle = True
    cnt = i
    break
  else: # 사이클 발생하지 않음
    union_parent(parent,a,b)
    cnt += 1

if cycle:
  print(cnt)
else:
  print(0)
