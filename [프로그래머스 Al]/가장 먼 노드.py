from collections import deque

n = int(input())
graph = [[] for _ in range(n+1)]
dist = [0 for _ in range(n)]
visited = [[False] * (n+1)]
answer = 0

def bfs(n,graph):
  q = deque([0])
  visited[0] = True
  for (i,j) in graph:
    graph[i].append(j)
    graph[j].append(i)
  while q:
    x = q.popleft()
    for j in graph[x]:
      if visited[j] is False:
        visited[j] = True
        q.append(j)
        dist[j] = dist[x] + 1
  answer = dist.count((max(dist)))
  return answer

        
