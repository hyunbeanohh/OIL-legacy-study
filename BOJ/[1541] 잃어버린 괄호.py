numput = (input().split('-')) # -로 문자열 스플릿
#print(numput)
sum = 0 #더해지는 값 선언

for i in numput[0].split('+'): #0번째 인덱스는 무조건 더해주는 값 sum에 더함
  sum += int(i)
  #print(i)

for j in numput[1:]: #식 안에 ' 50+20+10' 으로 되어있는 것들을 나눠줌.
  for k in j.split('+'):
    #print(k)
    sum -= int(k) # 나눠준것들을 모두 빼줌.
print(sum)
