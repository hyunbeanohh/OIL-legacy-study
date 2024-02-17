def solution(A):
  first = A[0]
  second = sum(A[1:])
  result = abs(first-second)
  for i in range(1,len(A)-1):
    first += A[i]
    second -= A[i]
    result = min(result,abs(first-second))
  return result
