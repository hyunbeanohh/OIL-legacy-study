# min 함수를 이용한 구현 
n,m = map(int,input().split())
answer = 0 
for i in range(n):
  data = list(map(int,input().split()))
  min_value = min(data)
  answer = max(answer,min_value)
    
print(answer)

#2중 for문을 이용한 구현
n,m = map(int,input().split())
answer = 0 
for i in range(n):
  data = list(map(int,input().split()))
  min_value = 10001
  for a in data:
    min_value = min(min_value,a)
  answer = max(answer,min_value)

print(answer)
