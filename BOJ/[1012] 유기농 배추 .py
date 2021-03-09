#DFS
import sys
sys.setrecursionlimit(10000)

dx = [-1,0,1,0]
dy = [0,-1,0,1]


def dfs(x,y):
  for i in range(4):
    nx = x +dx[i]
    ny = y +dy[i]
    if 0<= nx < n and 0<= ny < m:
      if graph[nx][ny] == 1 and visited[nx][ny] == 0:
        visited[nx][ny] = 1
        dfs(nx,ny)


t = int(input())
for _ in range(t):
  m,n,k = map(int,input().split())
  cnt = 0
  graph = [[0] * m for _ in range(n)]
  visited = [[0]*m for _ in range(n)]

  for _ in range(k):
    a,b = map(int,input().split())
    graph[b][a] = 1

  for i in range(n):
    for j in range(m):
      if graph[i][j] == 1 and visited[i][j] == 0:
        cnt += 1
        dfs(i,j)
  print(cnt)

# BFS
import sys
from collections import deque
sys.setrecursionlimit(10000)

dx = [-1,0,1,0]
dy = [0,-1,0,1]

def bfs(x,y):
  q = deque()
  q.append((x,y))
  visited[x][y] = True

  while q:
    x,y = q.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      if 0<= nx < n and 0<=ny < m:
        if graph[nx][ny] == 1 and visited[nx][ny] ==  False:
          q.append((nx,ny))
          visited[nx][ny] = True


t = int(input())
for _ in range(t):
  m,n,k = map(int,input().split())
  cnt = 0
  graph = [[0] * m for _ in range(n)]
  visited = [[0]*m for _ in range(n)]

  for _ in range(k):
    a,b = map(int,input().split())
    graph[b][a] = 1

  for i in range(n):
    for j in range(m):
      if graph[i][j] == 1 and visited[i][j] == 0:
        cnt += 1
        bfs(i,j)
        
  print(cnt)





