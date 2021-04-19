import sys
from collections import deque

while True:
    w,h = map(int,sys.stdin.readline().split())
    if w == 0 and h == 0:
        break
    land = [list(map(int,sys.stdin.readline().split())) for i in range(h)]
    # 상 우상 우 우하 하 좌하 좌 좌상
    # 8방향 탐색을 위해
    dx = [-1, -1, 0, 1, 1, 1, 0, -1]
    dy = [0, 1, 1, 1, 0, -1, -1, -1]
    
    q = deque()
    cnt = 0
    
    for i in range(h):
        for j in range(w):
            if land[i][j] == 1:
                q.append((i,j))
                land[i][j] = 2
                
                while q:
                    x,y, = q.popleft()
                    for k in range(8):
                        nx = x + dx[k]
                        ny = y + dy[k]
                        if 0<= nx < h and 0<= ny < w and land[nx][ny] == 1:
                            q.append((nx,ny))
                            land[nx][ny] = 2
                else:
                    cnt += 1
    print(cnt)
        
    
