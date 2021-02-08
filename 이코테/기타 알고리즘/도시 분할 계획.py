# 특정 원소가 속한 집합 찾기
def find_parent(parent,x):
  if parent[x] != x:
    parent[x] = find_parent(parent,parent[x])
  return parent[x]

# 두 원소가 속한 집합 합치기
def union_parent(parent,a,b):
  a = find_parent(parent,a)
  b = find_parent(parent,b)
  if a<b:
    parent[a] = b
  else:
    parent[b] = a

n,m = map(int,input().split())
parent = [0] *(n+1) # 부모 테이블 초기화 

# 부모 테이블상에서, 부모를 자기 자신으로 초기화
for i in range(0,n+1):
  parent[i] = i 

edges = []
result = 0

for _ in range(m):
  a,b,cost = map(int,input().split())
  edges.append((cost,a,b))
  #비용순으로 정렬하기 위해서 첫번째 원소를 비용으로 받음.

edges.sort() # 간선 오름차순 정렬
last = 0

for edge in edges:
  cost,a,b = edge
  #사이클이 발생하지 않는 경우에만 집합에 포함
  if find_parent(parent,a) != find_parent(parent,b):
    union_parent(parent,a,b)
    result += cost
    last = cost
    
print(result-last)
