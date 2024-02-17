arr = [7,5,9,0,3,1,6,2,4,8]

for i in range(len(arr)):
  min_index = i # 가장 작은 원소의 인덱스
  for j in range(i+1,len(arr)): # 다음 원소부터 비교
    if arr[min_index]> arr[j]: # arr[min_index]가 arr[j]보다 크다면 
      min_index = j #j가 최솟값
  arr[i],arr[min_index] = arr[min_index],arr[i] #서로 값을 바꿔줌.

print(arr)
    

arr = [7,5,9,0,3,1,6,2,4,8]

for i in range(1,len(arr)):
  for j in range(i,0,-1): #인덱스 i부터 1까지 감소하며 반복하는 문법
    if arr[j] < arr[j - 1] : #한 칸씩 왼쪽으로 이동
      arr[j],arr[j-1] = arr[j-1],arr[j] 
    else:
      break #자기보다 작은데이터 만나면 그 위치에서 멈춤
print(arr)
