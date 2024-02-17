i = int(input())
answer = 0
def divN(i) :
  divstr = list(map(int,str(i))) # 입력값을 리스트에 나눔
  divsum = answer + sum(divstr) # 정수로 형변환 후 각 자리수 합을 구함

  return divsum

while divN(answer) != i: # 분해값이 입력값과 같을때까지
  if answer == i: #분해값이 입력값과 같다면
    answer = 0 #생성자가 없다는 뜻이므로 0으로 초기화 후 
    break #반복문 빠져나옴
  else: 
    answer +=1 #같을때까지 +1 
print(answer)
