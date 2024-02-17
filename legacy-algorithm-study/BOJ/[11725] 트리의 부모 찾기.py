import sys
tc = int(input())
graph = [[] for _ in range(tc+1)]
parent = [[] for _ in range(tc+1)]

for _ in range(tc-1):
    a,b = map(int,sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)
   
def dfs(graph , start, parent):
    stack = [start]
    while stack:
        now = stack.pop()
        for i in graph[now]:
            parent[i].append(now)
            stack.append(i)
            graph[i].remove(now)
    return parent

for i in list(dfs(graph,1,parent))[2:]:
    print(i[0])
