from collections import deque
n = int(input())
graph = [list(map(int,input().split())) for _ in range(n)]
INF = int(1e9)

now_size = 2 # 아기상어의 현재 크기
now_x, now_y = 0,0 #아기 상어의 현재 위치

# 아기 상어 위치를 찾아 그 자리에는 아무것도 없는것으로 처리
for i in range(n):
  for j in range(n):
    if graph[i][j] == 9:
      now_x,now_y = i,j
      graph[now_x][now_y] = 0

dx = [-1,0,1,0]
dy = [0,1,0,-1]

def bfs():
  # 값이 -1 이라면 도달할 수 없다는 의미
  dist = [[-1]* (n) for _ in range(n)]
  # 시작 위치는 도달이 가능하다고 보며 거리는 0
  q = deque([(now_x,now_y)])
  dist[now_x][now_y] = 0

  while q :
    x,y = q.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      if 0<= nx < n and 0<= ny <n:
        # 자신의 크기보다 크거나 같은 경우에 지나갈 수 없음
        if dist[nx][ny] == -1 and graph[nx][ny] <= now_size:
          dist[nx][ny] = dist[x][y] + 1
          q.append((nx,ny))
  return dist # 모든 위치까지의 최단 거리 테이블 반환

# 최단 거리 테이블이 주어졌을 때, 먹을 물고기를 찾는 함수
def find(dist):
  x,y = 0,0
  min_dist = INF
  for i in range(n):
    for j in range(n):
      # 도달이 가능하면서 먹을 수 있는 물고기일 때
      if dist[i][j] != -1 and 1 <= graph[i][j] < now_size:
        # 가장 가까운 물고기 1마리만 선택
        if dist[i][j] < min_dist:
          x, y = i,j
          min_dist = dist[i][j]
  if min_dist == INF:
    return None
  else:
    return x,y,min_dist # 먹을 물고기의 위치와 최단 거리

result = 0 # 최종 답
ate = 0 # 먹은 양

while True:
  # 먹을 수 있는 물고기 찾기
  value = find(bfs())

  if value == None:
    print(result)
    break
  else: # 현재 위치 갱신 및 이동 거리 변경
    now_x,now_y = value[0],value[1]
    result += value[2]
    # 먹은 위치에는 이제 아무것도 없도록 처리
    graph[now_x][now_y] = 0
    ate += 1
    # 자신의 현재 크기 이상으로 먹은 경우 크기 증가
    if ate >= now_size:
      now_size += 1
      ate = 0
