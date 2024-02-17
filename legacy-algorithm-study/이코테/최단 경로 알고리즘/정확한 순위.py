INF = int(1e9)

#노드의 개수와 간선의 정보 입력받기
n,m = map(int,input().split())
graph = [[INF] * (n+1) for _ in range(n+1)]

#자기 자신에서 자기 자신으로 가는 비용은 0으로 초기화
for a in range(1,n+1):
  for b in range(1,n+1):
    if a == b :
      graph[a][b] = 0

#각 간선에 대한 정보를 입력받아, 그 값으로 초기화
for _ in range(m):
  a,b = map(int,input().split())
  graph[a][b] = 1 # a에서 b로 가는 값을 1로 초기화

# 점화식에 따라 플로이드 워셜 알고리즘 수행
for k in range(1,n+1):
  for a in range(1,n+1):
    for b in range(1,n+1):
      graph[a][b] = min(graph[a][b],graph[a][k]+graph[k][b])

result = 0
#각 학생을 번호에 따라 한명씩 확인하며 도달 가능한지 체크
for i in range(1,n+1):
  count = 0
  for j in range(1,n+1):
    if graph[i][j] !=  INF or graph[j][i] != INF:
      count += 1
  if count == n:
    result += 1
    
print(result) 
