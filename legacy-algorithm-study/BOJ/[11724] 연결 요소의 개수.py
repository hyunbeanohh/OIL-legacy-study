import sys
n,m = map(int,sys.stdin.readline().split())
answer = 0
graph = [[] for i in range(n+1)]
visited = [False] * (n+1)

for i in range(m):
    a,b = map(int,sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)

def bfs(a):
    queue = [a]
    while queue:
        now = queue.pop(0)
        for i in graph[now]:
            if visited[i] == False :
                visited[i] = True
                queue.append(i)
for i in range(1,n+1):
    if visited[i] == False :
        answer += 1
        bfs(i)
print(answer)
