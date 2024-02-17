from collections import deque
import copy
#노드의 개수와 간선 개수 입력받기
n = int(input())
#모든 노드에 대한 진입 차수는 0으로 초기화
time = [0] *(n+1)
#각 노드에 연결된 간선 정보를 담기 위한 연결 리스트 초기화
graph= [[]for i in range(n+1)]
indegree = [0] * (n+1)

#방향 그래프의 모든 간선 정보를 입력하기
for i in range(1,n+1):
  data = list(map(int,input().split()))
  time[i] = data[0]
  for j in data[1:-1]:
    indegree[i] += 1
    graph[j].append(i)

#위상 정렬 함수
def topology_sort():
  result = copy.deepcopy(time)
  q = deque()

  #처음 시작할 때는 진입차수가 0인 노드를 큐에 삽입
  for i in range(1,n+1):
    if indegree[i] == 0:
      q.append(i)

  #큐가 빌 때 까지 반복
  while q:
    #큐에서 원소 꺼내기
    now = q.popleft()
    #해당 진입 차수에서 1 빼주기
    for i in graph[now]:
      result[i] = max(result[i],result[now]+time[i])
      indegree[i] -= 1
      if indegree[i] == 0:
        q.append(i)
  for i in range(1,n+1):
    print(result[i])

topology_sort()
