def solution(A,K):
  if len(A) == 0:
    return []
  for i in range(K):
    p = A.pop(-1)
    A.insert(0,p)
  return A
