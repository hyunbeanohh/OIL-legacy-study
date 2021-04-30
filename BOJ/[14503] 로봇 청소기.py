import sys
n,m = map(int,input().split())
r,c,d, = map(int,input().split())
graph =[list(map(int,sys.stdin.readline().split())) for _ in range(n)]
answer = 0
dx = [-1,0,1,0]
dy = [0,1,0,-1]

def clean(r,c,d):
    global answer
    if graph[r][c] == 0:
        graph[r][c] = 2
        answer += 1
        
    for _ in range(4):
        nd = (d + 3) % 4
        nx = r + dx[nd]
        ny = c + dy[nd]
        
        if graph[nx][ny] == 0:
            clean(nx,ny,nd)
            return
          
        d = nd
        
    nd = (d+2) % 4 # d번 조건
    nx = x + dx[nd]
    ny = y + dy[nd]
    if graph[nx][ny] == 1: # 뒤가 바로 벽이면 종료
        return
    clean(nx,ny,d) # 바라보는 방향은 그대로 유지하면서 후진
clean(r,c,d)
print(answer)
