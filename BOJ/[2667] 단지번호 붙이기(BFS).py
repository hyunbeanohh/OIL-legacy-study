n = int(input())
graph =[]
for _ in range(n):
    graph.append(list(map(int,input())))
visited = [[0]*n for _ in range(n)]
dx = [-1,0,1,0]
dy = [0,1,0,-1]

def bfs(graph,x,y,cnt):
    graph[x][y] = 0
    queue = []
    queue.append((x,y))
    while queue:
        x,y, = queue.pop()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0<=nx<n and 0<=ny<n:
                if graph[nx][ny] == 1 and visited[nx][ny] == 0:
                    cnt += 1
                    graph[nx][ny] = 0
                    queue.append((nx,ny))
    return cnt
cnt = 0
answer = []
for a in range(n):
    for b in range(n):
        if graph[a][b] == 1 and visited[a][b] == 0:
            answer.append(bfs(graph,a,b,cnt+1))
            
print(len(answer))
for i in sorted(answer):
    print(i)
