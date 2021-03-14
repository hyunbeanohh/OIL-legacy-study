n = int(input())
graph = []

for  _ in range(n):
    graph.append(list(map(int,input())))
    
visited = [[0]*n for _ in range(n)]

dx = [-1,0,1,0]
dy = [0,1,0,-1]

def dfs(x,y,c):
    visited[x][y] = 1
    global nums
    
    if graph[x][y] == 1:
        nums += 1
        
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0<= nx <n and 0<= ny <n:
            if graph[nx][ny] == 1 and  visited[nx][ny] ==  0:
                dfs(nx,ny,c)
numslist = []
nums = 0
cnt = 1
for a in range(n):
    for b in range(n):
        if graph[a][b] == 1 and visited[a][b] == 0:
            dfs(a,b,cnt)
            numslist.append(nums)
            nums = 0
print(len(numslist))
for i in sorted(numslist):
    print(i)
