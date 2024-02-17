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
        
computer = int(input())
edge = int(input())
network = []
parent = [i for i in range(edge+2)]

for i in range(edge):
    a,b,cost = map(int,input().split())
    network.append((cost,a,b))
    
network.sort()
result = 0

for node in network:
    cost,a,b = node
    if find_parent(parent,a) != find_parent(parent,b):
        union_parent(parent,a,b)
        result += cost
print(result)
