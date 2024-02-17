from collections import deque
def bfs(start,graph,dist,K):
    q = deque()
    q.append(start)
    dist[start] = 0
    
    while q:
        now = q.popleft()
        for i in range(1,len(graph)):
            if graph[now][i] != 0:
                if dist[i] > dist[now] + graph[now][i] and dist[now] + graph[now][i] <= K:
                    q.append(i)
                    dist[i] = dist[now] + graph[now][i] 
    return len([i for i in dist if i <= K])

def solution(N, road, K):
    graph = [[0 for _ in range(N+1)] for _ in range(N+1)]
    dist = [987654321 for _ in range(N+1)]
    
    for a,b,cost in road:
        if graph[a][b] == 0 and graph[b][a] == 0:
            graph[a][b] ,graph[b][a] = cost,cost
        else:
            if cost < graph[a][b] :
                graph[a][b] , graph[b][a] = cost,cost
                
    return bfs(1,graph,dist,K)
