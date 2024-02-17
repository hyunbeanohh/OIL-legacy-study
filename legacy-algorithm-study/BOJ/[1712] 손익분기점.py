a,b,c = list(map(int,input().split()))
break_point = 0

if c <= b:
  break_point = -1
else:
  break_point = a//(c-b)+1

print(break_point)
