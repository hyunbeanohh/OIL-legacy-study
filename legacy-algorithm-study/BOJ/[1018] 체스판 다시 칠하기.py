n,m = map(int,input().split())
board = list()
for _ in range(n):
  board.append(input())
repair = list()

for i in range(n-7):# 8*8로 잘라야 하기 때문에 i-7 만큼 ,j-7만큼 고정
  for j in range(m-7):
    W = 0
    B = 0
    for k in range(i,i+8):
      for l in range(j,j+8):
        if (k+l) % 2 == 0 : # 흰색이 먼저 있는 경우
          if board[k][l] != 'W':
            W += 1
          if board[k][l] != 'B':
            B += 1
        else: # 검정색이 먼저 있는 경우
          if board[k][l] != 'B':
            W += 1
          if board[k][l] != 'W':
            B += 1
    repair.append(W)
    repair.append(B)
print(min(repair))
