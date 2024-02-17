n  =  int(input())
d = [0] * (n+1)

d[0] = 0
d[1] = 0

for i in range(2,n+1):
  if n == 0 :
    continue
    
  #현재의 수에서 1을 빼는 경우
  d[i] = d[i -1] +1 
    
  if i % 3 == 0: # 3으로 나눌 경우
    d[i] = min(d[i],d[i//3]+1)
    
  if i % 2 == 0: # 2로 나눌 경우 
    d[i] = min(d[i], d[i//2]+1) 
    
print(d[n])
