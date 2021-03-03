INF = int(1e9) #무한을 의미하는 값으로 10억을 설정

#노드의 개수와 간선의 개수 입력받기.
node,line = map(int,input().split())
#2차원 그래프 무한으로 채워서 선언.
graph = [[INF]*(node+1) for _ in range(node+1)]

#자기 자신에서 자기 자신으로 가는 비용은 0으로 초기화
for a in range(1,node+1):
  for b in range(1,node+1):
    if a == b:
      graph[a][b] = 0

#각 간선에 대항ㄴ 정보를 입력받아, 그 값으로 초기화.
for _ in range(line):
  #A와 B가 서로에게 가는 비용은 1이라고 설정
  a, b = map(int,input().split())
  graph[a][b] = 1
  graph[b][a] = 1

#거쳐 갈 노드 X와 최종 목적지 노드 K를 입력받기
x,k = map(int,input().split())

#점화식에 따라 플로이드 워셜 알고리즘 수행
for k in range(1,node+1):
  for a in range(1,node+1):
    for b in range(1,node+1):
      graph[a][b] = min(graph[a][b],graph[a][k]+graph[k][b])
#수행된 결과를 출력
distance = graph[1][k] + graph[k][x]

#도달할 수 없는경우 -1 출력
if distance >= INF:
  print('INF',end=' ')
#도달할 수 있으면 거리 출력
else: 
  print(distance)

