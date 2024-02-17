n = int(input())
stage , key = 1,1
#key에 stage를 누적하면서 n이 어떤 스테이지에 있는지 찾는다
while key+stage <= n :
  key += stage
  stage += 1

#stage는 행과 같으므로 열과 같은 동작을 할 step 선언

step = n - key
x,y = step + 1 ,stage - step

if stage % 2 == 0 :
  print('{}/{}'.format(x,y))
if stage % 2 == 1:
  print('{}/{}'.format(y,x))
