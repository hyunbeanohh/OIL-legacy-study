n = int(input())

for i in range(n):
  answer = list(input())
  cnt = 0
  sumanswer = 0
  for j in answer:
    if j =='O':
      cnt +=1
      sumanswer += cnt
    if j =='X':
      cnt = 0
  print(sumanswer)      
