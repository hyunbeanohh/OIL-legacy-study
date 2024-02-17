from collections import Counter
matrix = [[1,19,20,8,25],[21,4,3,17,24],[12,5,6,16,15],[11,18,10,9,23],[7,13,14,22,2]]

row_matrix = list(matrix) # 얕은 복사를 사용하면 원본이 훼손됨
col_matrix = list(matrix)
row_middle = []
col_middle = []
mid = len(matrix)//2 # 정렬 후 중간값을 뽑아내기 위한 가운데 값

#행 기준으로 정렬 
for i in range(len(matrix)):
  row_matrix[i] = sorted(row_matrix[i])
  row_middle.append(row_matrix[i][mid])

# 열 기준으로 정렬
temp =[]
n = len(matrix)

for j in range(len(matrix[0])):
  for i in range(len(matrix)):
    temp.append(matrix[i][j])

# 행과 열의크기만큼 1차원 배열을 끊어줌 (열 구현)
result = [temp[i * n:(i + 1) * n] for i in range((len(temp) + n - 1) // n )] 

for i in range(len(result)):
  result[i] = sorted(result[i])
  col_middle.append(result[i][mid])

cnt = 0
answer = row_middle+col_middle
counter = Counter(answer)

# 카운터 객체로 담아 중복된 값이 있다면 카운트를 증가해줌
# 메트릭스에는 중복된 값이 없기 때문에 
for i in counter.values():
  if i == 2:
    cnt += 1
print(cnt)
