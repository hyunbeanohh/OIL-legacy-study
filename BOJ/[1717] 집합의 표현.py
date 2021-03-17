import sys
sys.setrecursionlimit(100000)
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

v,e = map(int,input().split())
parent = [0] * (v+1)

for i in range(1,v+1):
    parent[i] = i

for i in range(e):
  data = list(map(int,sys.stdin.readline().split()))
  if data[0] == 0:
    union_parent(parent,data[1],data[2])
  if data[0]  == 1:
    if find_parent(parent,data[1]) != find_parent(parent,data[2]):
      print('NO')
    else:
      print('YES')
