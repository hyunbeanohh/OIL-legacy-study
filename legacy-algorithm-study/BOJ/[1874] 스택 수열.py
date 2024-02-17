n = int(input())
stack = []
operate = []
tag = True
cnt = 1

for i in range(n):
  num = int(input())
  
  while cnt <= num:
    stack.append(cnt)
    operate.append('+')
    cnt += 1
    
  if stack[-1] == num:
    stack.pop()
    operate.append('-')
  else:
    tag = False

if tag == False:
  print('NO')
else:
  for i in operate:
    print(i)
    
