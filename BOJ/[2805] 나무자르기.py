from sys import stdin
N,M = map(int,stdin.readline().split())
trees = list(map(int,stdin.readline().split()))

def sumtree(he):
  sum = 0
  for i in trees:
    if i - he > 0:
      sum += i-he
  return sum

def binary(target):
  answer = 0
  start,end = 0,max(trees)
  while start <= end:
    mid = (start + end) // 2
    Sum = sumtree(mid)
    if Sum < target:
      end = mid - 1
    if Sum >= target:
      answer = mid
      start = mid + 1
  return answer

print(binary(M))
    


      
