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

# 각 연산을 하나씩 확인
for i in range(m):
  order,a,b = map(int,input().split())
  # 팀 합치기 실행
  if order == 0:
    union_parent(parent,a,b)
    # 팀이 같은지 확인
  elif order == 1:
    if find_parent(parent,a) == find_parent(parent,b):
      print('YES')
    else:
      print('NO')

