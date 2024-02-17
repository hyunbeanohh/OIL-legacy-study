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
    
while True:
    n,m = map(int,sys.stdin.readline().split())
    parent =[i for i in range(n)]
    result = 0
    graph = []
    
    if n == 0 and m == 0 :
        break

    for i in range(m):
        a,b,cost = map(int,sys.stdin.readline().split())
        graph.append((cost,a,b))
        
    graph.sort()

    for edge in graph:
        cost,a,b = edge
        
        if find_parent(parent,a) != find_parent(parent,b):
            union_parent(parent,a,b)
        else:
            result += cost

    print(result)
