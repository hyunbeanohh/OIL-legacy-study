n = list(map(int,input()))
lenN = len(n)//2
leftN = n[0:lenN]
rightN = n[lenN:]

if sum(leftN) == sum(rightN):
  print("Lucky")
else:
  print("Ready")
  
