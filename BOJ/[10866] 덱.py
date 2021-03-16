from collections import deque
import sys

testcase = int(input())
q = deque([])

for _ in range(testcase):
  col = sys.stdin.readline().split()
  if col[0] == 'push_front':
    q.insert(0,col[1])
  if col[0] == 'push_back':
    q.append(col[1])
  if col[0] == 'pop_front' :
    if len(q) == 0:
      print(-1)
    else:
      print(q.popleft())
  if col[0] == 'pop_back':
    if len(q) == 0:
      print(-1)
    else:
      print(q.pop())
  if col[0] == 'size':
    print(len(q))
  if col[0] == 'empty':
    if len(q) == 0:
      print(1)
    else:
      print(0)
  if col[0] == 'front':
    if len(q) == 0:
      print(-1)
    else:
      print(q[0])
  if col[0] == 'back':
    if len(q) == 0:
      print(-1)
    else:
      print(q[-1])
    
