x = int(input())

d = [0] * (x+1)

def solution(n):
  if n == 1:
    return 1
  if n == 2:
    return 2
  if n == 3:
    return 4
  return solution(n-1)+solution(n-2)+solution(n-3)

for j in range(x):
  print(solution(int(input())))
