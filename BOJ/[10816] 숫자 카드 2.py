import sys

n = map(int,sys.stdin.readline())
keyList = list(map(int,sys.stdin.readline().split()))
dic = {} #딕셔너리 선언

for k in keyList:
  if k not in dic:
    dic[k] = 1
  else:
    dic[k] += 1

m = map(int,sys.stdin.readline())
target = list(map(int,sys.stdin.readline().split()))

for t in target:
  if t in dic:
    sys.stdout.write(str(dic[t])+" ")
  else:
    sys.stdout.write("0 ")
