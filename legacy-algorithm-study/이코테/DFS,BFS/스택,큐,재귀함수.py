#반복적으로 구현
def factorial_iterative(n):
  result =1
  for i in range(1,n+1):
    result *= i
  return result
#재귀적으로 구현 (반복적으로 구현하는 것보다 깔끔함)
def factorial_recursive(n):
  if n<=1:
    return 1
  return n *factorial_recursive(n -1)

print('반복적으로 구현 :',factorial_iterative(5))
print('재귀적으로 구현 :', factorial_recursive(5))


#행이 3개인 2차원 리스트로 인접 리스트 표현
graph = [[] for _ in range(3)]

#노드 0에 연결된 노드 정보 저장(노드,거리)
graph[0].append((1,7))
graph[0].append((2,5))

#노드 1에 연결된 노드 정보 저장(노드,거리)
graph[1].append((0,7))

#노드 2에 연결된 노드 정보 저장(노드,거리)
graph[2].append((0,5))

print(graph)
