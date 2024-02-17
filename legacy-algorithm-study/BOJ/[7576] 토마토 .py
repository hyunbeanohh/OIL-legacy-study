from collections import deque

dx = [-1,0,1,0]
dy = [0,1,0,-1]

def bfs():
  result = 0
  while q:
    result += 1
    for _ in range(len(q)):
      x,y = q.popleft()
      for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0<= nx < n and 0<= ny <m:
          if graph[nx][ny] == 0:
            graph[nx][ny] = 1
            q.append([nx,ny])
  return result

m,n = map(int,input().split())
graph , q = [],deque()

for i in range(n):
  row = list(map(int,input().split()))
  for j in range(m):
    if row[j] == 1:
      q.append([i,j])
  graph.append(row)

result = bfs() - 1
for i in range(n):
  for j in range(m):
    if graph[i][j] == 0:
      print(-1)
      exit()
print(result)
