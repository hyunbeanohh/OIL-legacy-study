a = int(input())
b = int(input())
answer = []

def prime(num):
    if num == 1:
        return False
    elif num == 2:
        return True
    for i in range(2,num):
        if num % i == 0:
            return False
    return True

for i in range(a,b+1):
  if prime(i):
    answer.append(i)

if len(answer) != 0:
  print(sum(answer))
  print(min(answer))

if len(answer) == 0:
  print(-1)

    
