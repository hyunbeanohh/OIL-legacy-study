class Solution(object):
    def canFinish(self, numCourses, prerequisites):
        
        graph = collections.defaultdict(list)
        for x ,y in prerequisites:
            graph[x].append(y) # 그래프 구성
        
        trace = set()
        visited = set()
        
        def dfs(i):
            if i in trace:
                return False
            if i in visited:
                return True
            
            
            trace.add(i)
            
            
            for y in graph[i]:
                if not dfs(y):
                    return False
                
            trace.remove(i) # 탐색 종료 후 순환 노드 삭제
            visited.add(i) # 탐색 종료 후 방문 노드 추가
            
            return True
        
        # 순환 구조 판별
        for x in list(graph):
            if not dfs(x):
                return False
        return True
