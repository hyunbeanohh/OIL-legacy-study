# 나이트 위치 구하기
n = input()
row = int(n[1])
column = int(ord(n[0])) - int(ord('a')) + 1 # ord : 아스키코드로 변환

#print(int(ord(n[0])),int(ord('a')) + 1)

kinightmove = [(-2,-1),(-1,-2),(1,-2),(2,-1),(2,1),(1,2),(-1,2),(-2,1)] #나이트가 움직일 수 있는 값 

answer = 0
for step in kinightmove :
  next_row = row+step[0]
  next_column = column + step[1]
  
  # 체스판을 벗어났을 경우
  if next_row >= 1 and next_column  <= 8 and next_row <= 8 and next_column  >= 1 :
    answer += 1
    
print(answer)
