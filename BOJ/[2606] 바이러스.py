graph = {} #딕셔너리 선언
visited = [] #감염된 컴퓨터를 넣을 배열

for i in range(int(input())):
  graph[i+1] = set() # 그래프처럼 표현하기 위해 set으로 집합 연산자 표현

for j in range(int(input())):
  a,b = map(int,input().split())
  graph[a].add(b) # a-b 연결
  graph[b].add(a) # b-a 연결

def dfs(start,graph):
  for i in graph[start]: # 노드를 순회하면서
    if i not in visited: # 연결된 노드들을 배열에 추가 후 재귀함수 수행
      visited.append(i)
      dfs(i,graph)

dfs(1,graph) # 1번 컴퓨터가 바이러스에 걸림
print(len(visited)-1) # 1번 컴퓨터 까지 배열에 추가되므로 -1

def bfs(start,graph):
  queue = [start]
  while queue:
    for i in graph[queue.pop()]:
      if i not in visited:
        visited.append(i)
        queue.append(i)

bfs(1,graph)
print(len(graph)-1)
