s = input()
newarr = []
sumNum = 0
for i in s:
  if ord(i) < 65:
    sumNum+= int(i)
  else:
    newarr.append(i)

newarr.sort()
answer = ''
for i in newarr:
  answer += i
print(answer)
print(sumNum)
print(answer+str(sumNum))
