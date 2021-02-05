a,b = map(int,input().split())


def prime(num):
  if num == 1:
    return False
  elif num ==2:
    return True
  for i in range(2,int(num**0.5)+1):
    if num%i == 0:
      return False
  return True

for i in range(a,b+1):
  if prime(i):
    print(i)
