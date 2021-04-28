def solution(n, costs):
    answer = 0
    
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
            
    parent = [i for i in range(n)]
    costs = sorted(costs,key=lambda a:a[2])
    graph = []
    
    
    for edge in costs:
        a,b,cost = edge
        if find_parent(parent,a) != find_parent(parent,b):
            union_parent(parent,a,b)
            answer += cost
    return answer
