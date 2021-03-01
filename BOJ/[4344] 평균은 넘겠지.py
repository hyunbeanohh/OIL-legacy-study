n = int(input())

for i in range(n):
  answer = list(map(int,input().split()))
  avg = sum(answer[1:])/answer[0]
  cnt = 0
  
  for j in answer[1:]:
    if j > avg:
      cnt +=1
    #stdavg = format(cnt/answer[0]*100,'.3f')
  #print(f'{stdavg}%')
  print(str('%.3f' % round(cnt/answer[0]*100, 3)) + '%')
