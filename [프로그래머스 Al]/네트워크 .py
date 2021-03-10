# DFS
def solution(n, computers):
    answer = 0
    visited = [False]*n
    for i in range(n):
        if visited[i] == False :
            dfs(n,computers,i,visited)
            answer += 1 
    return answer


def dfs(n,computers,start,visited):
    visited[start] = True
    for connect in range(n):
        if connect != start and computers[start][connect] == 1:
            if visited[connect] == False:
                dfs(n,computers,connect,visited)

                
#BFS
def solution(n, computers):
    answer = 0
    visited = [False] * n
    for i in range(n):
        if visited[i] == False:
            answer += 1
            bfs(n,computers,i,visited)
    return answer


def bfs(n,computers,start,visited):
    visited[start] = True
    q = []
    q.append(start)
    while q:
        start = q.pop()
        visited[start] = True
        for connect in range(n):
            if connect != start and computers[start][connect] == 1:
                if visited[connect] == False:
                    q.append(connect)
