from collections import deque

def bfs(maps,x,y):
    dx = [-1,0,1,0]
    dy = [0,1,0,-1]
    q = deque()
    q.append((x,y))
    
    while q:
        x,y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < len(maps) and 0<= ny < len(maps[0]) and maps[nx][ny] == 1 :
                q.append((nx,ny))
                maps[nx][ny] = maps[x][y] + 1
                
def solution(maps):
    answer = 0
    
    bfs(maps,0,0)
  
    if maps[len(maps)-1][len(maps[0])-1] == 1:
        return -1
    else:
        return maps[len(maps)-1][len(maps[0])-1]
    
    return answer
