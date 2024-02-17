n, m = map(int,input().split()) #데이터 입력1
data = list(map(int,input().split())) #데이터 입력2
result = 0 #결과 값 초기화
for i in range(n): #1번째 반복
  for j in range(i+1, n): #2번째 반복
    for k in range(j+1 , n): #3번째 반복
      if data[i] + data[j] + data[k]  > m: # 전부 더한 값이 m을 넘는다면
        continue # 반복문 나와서 다시 
      else:
        result = max(result,data[i] + data[j] + data[k] ) # result,와 더한 값들의 최대값 탐색
print(result)
