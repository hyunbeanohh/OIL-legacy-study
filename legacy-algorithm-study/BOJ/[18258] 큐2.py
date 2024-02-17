from collections import deque
import sys
n = int(input())
result = deque([])

for _ in range(n):
  col = sys.stdin.readline().split()
  if col[0] == 'push':
    result.append(col[1])
  if col[0] == 'front':
    if len(result) == 0:
      print(-1)
    else:
      print(result[0])
  if col[0] == 'back':
    if len(result) == 0:
      print(-1)
    else:
      print(result[-1])
  if col[0] == 'size':
    print(len(result))
  if col[0] == 'empty':
    if len(result) == 0:
      print(1)
    else:
      print(0)
  if col[0] == 'pop':
    if len(result) == 0:
      print(-1)
    else:
      print(result.popleft())
