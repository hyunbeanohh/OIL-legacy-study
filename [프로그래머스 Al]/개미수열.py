# 개미 수열 구현하기

n = int(input())

def ant_number(number):
  str_num = ''
  count = 1
  for idx in range(len(number)):
    if (idx+1 == len(number) or number[idx] != number[idx+1]):
      str_num += str(number[idx]) + str(count)
      count = 1
    else:
      count += 1
  return str_num

start = '1'
for i in range(0,n):
  print(start)
  start = ant_number(start)
