from collections import deque
import sys
dx = [-1, 0, 1, 0, 0, 0]
dy = [0, 1, 0, -1, 0, 0]
dz = [0, 0, 0, 0, -1, 1]


def bfs():
    while q:
        x, y, z = q.popleft()
        for i in range(6):
            nx = x + dx[i]
            ny = y + dy[i]
            nz = z + dz[i]
            if 0 <= nx < H and 0 <= ny < N and 0 <= nz < M:
                if tomato[nx][ny][nz] == 0 and visited[nx][ny][nz] == 0:
                    q.append([nx, ny, nz])
                    tomato[nx][ny][nz] = 1
                    visited[nx][ny][nz] = visited[x][y][z] + 1


M, N, H = map(int, input().split())
tomato = [[list(map(int, input().split())) for i in range(N)] for i in range(H)]
visited = [[[0] * M for i in range(N)] for i in range(H)]
q = deque()

for i in range(H):
    for j in range(N):
        for k in range(M):
            if tomato[i][j][k] == 1 and visited[i][j][k] == 0:
                q.append([i, j, k])
                visited[i][j][k] = 1
answer = 0
bfs()
for i in tomato:
    for j in i:
        if 0 in j:
            print(-1)
            sys.exit()

for i in visited:
    for j in i:
        list_max= max(j)
        answer = max(answer, list_max)
print(answer-1)
