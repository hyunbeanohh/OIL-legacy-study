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
