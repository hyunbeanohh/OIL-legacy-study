import sys
n = sys.stdin.readline

while 1:
  string = input().rstrip()
  stack = []
  cnt = 1
  for str in string:
    if str =='(' or str =='[':
      stack.append(str)
    elif str == ')':
      if stack and stack[-1] == '(':
        stack.pop()
      else:
        cnt = 0 
        break
    elif str == ']':
      if stack and stack[-1] == '[':
        stack.pop()
      else:
        cnt = 0
        break
  if string =='.':
    break
  print('yes' if cnt and not(stack) else 'no')



