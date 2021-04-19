from collections import defaultdict
def solution(tickets):
    answer = []
    graph = defaultdict(list)
    
    for a,b in sorted(tickets):
        graph[a].append(b)
  

    def dfs(a):
        while graph[a]:
            dfs(graph[a].pop(0))
        answer.append(a)
        
    dfs('ICN')
    return answer[::-1]

from collections import defaultdict
def solution(tickets):
    answer = []
    graph = defaultdict(list)
    for a,b in sorted(tickets,reverse=True):
        graph[a].append(b)
    
    def dfs(a):
        while graph[a]:
            dfs(graph[a].pop())
        answer.append(a)
        
    dfs('ICN')
    return answer[::-1]
