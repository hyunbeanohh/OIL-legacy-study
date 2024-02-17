#1차 풀이
n,k = map(int,input().split())
result = 0

while n >= k:
  while n%k != 0:
    n -= 1
    result += 1
  n //= k
  result += 1

while n>1:
  n -= 1
  result +=1
print(result)

#2차 풀이
n,k = map(int,input().split())
result = 0

while True:
  target = (n // k ) * k
  result += (n-target)
  n = target

  #N이K보다 적을때 탈출
  if n <k :
    break
  #K로 나누기
  result +=1
  n //= k

result += (n-1) 
print(result)
