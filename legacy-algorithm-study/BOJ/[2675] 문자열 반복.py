n = int(input())

for i in range(n):
  num,s = input().split()
  str = ""
  for i in s:
    str += i*int(num)
  print(str)
