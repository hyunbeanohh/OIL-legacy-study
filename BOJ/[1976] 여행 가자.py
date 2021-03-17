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

v = int(input())
e = int(input())
parent = [0] * (v+1)

for i in range(1,v+1):
    parent[i] = i

for i in range(v):
    graph = list(map(int,input().split()))
    for j in range(v):
        if graph[j] == 1:
            union_parent(parent,i+1,j+1)

result = True
plan = list(map(int,input().split()))

for i in range(e-1):
    if find_parent(parent,plan[i]) != find_parent(parent,plan[i+1]):
        result = False

if result == True:
    print('YES')
else:
    print('NO')
