# DFS로 일정 그래프 구성
class Solution(object):
    def findItinerary(self, tickets):
        graph = collections.defaultdict(list)
        # 그래프 순서대로 구성
        for a,b in sorted(tickets):
            graph[a].append(b)
        route = []
        def dfs(a):
          # 첫 번째 값을 읽어 어휘 순 방문
            while graph[a]:
                dfs(graph[a].pop(0))
            route.append(a)
        print(graph)
        dfs('JFK')
        # 다시 뒤집어 어휘 순 결과로 출력
        return route[::-1]

# 스택구조를 활용하여 pop(0) -> O(n) 에서 pop() -> O(1)로 시간 복잡도 개선
class Solution(object):
    def findItinerary(self, tickets):
        graph = collections.defaultdict(list)
        for a,b in sorted(tickets,reverse = True):
            graph[a].append(b)
        route = []
        def dfs(a):
            while graph[a]:
                dfs(graph[a].pop())
            route.append(a)
        print(graph)
        dfs('JFK')
        return route[::-1]
# 재귀구조를 사용하지 않고 일정 그래프 반복
class Solution(object):
    def findItinerary(self, tickets):
        graph = collections.defaultdict(list)
        for a,b in sorted(tickets):
            graph[a].append(b)
        
        route,stack = [],['JFK']
        
        while stack:
            while graph[stack[-1]]:
                stack.append(graph[stack[-1]].pop(0))
            route.append(stack.pop())
        return route[::-1]
