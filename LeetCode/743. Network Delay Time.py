class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = collections.defaultdict(list)
        
        for u,v,w in times:
            graph[u].append((v,w)) # 인접 그래프 구성
        
        q = [(0,k)] # 큐 변수 : [(소요 시간,정점)]
        dist = collections.defaultdict(int)
        
        while q: 
            time,node = heapq.heappop(q) # 우선 순위 큐 최솟값 기준으로 정점까지 최단 경로 삽입
            if node not in dist:
                dist[node] = time
                for v,w in graph[node]:
                    alt = time + w
                    heapq.heappush(q,(alt,v))
        # 모든 노드의 최단 경로 존재 여부 판별 
        if len(dist) == n:
            return max(dist.values())
        return -1
