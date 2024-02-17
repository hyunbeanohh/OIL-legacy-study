day = 6 # 1월1일의 요일 
k = 1 # 관리비 받는 날짜

#weeks = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일','일요일']
days = [31,28,31,30,31,30,31,31,30,31,30,31]
total_days = 0
current_days = 0
answer= []

for i in range(len(days)):
  if i != 0: # 1월이 아니라면 그 전월까지 일수를 더함
    total_days += days[i-1]
  else: # 1월이라면 요일에 관리받는 날짜를 더하고 1을 뺴서 1부터 시작하는 total_days와 요일(0부터시작)을 맞춤
    total_days  = day + k -1
  current_days= total_days % 7
  # print(weeks[current_days])
  
  if current_days == 5 or current_days == 6:
    answer.append(1)
  else:
    answer.append(0)  
print(answer)
