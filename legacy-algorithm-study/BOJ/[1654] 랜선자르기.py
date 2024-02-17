from sys import stdin #빠르게 입력받기 위한 sys라이브러리 선언

K,N = map(int,stdin.readline().split()) #공백 구분으로 입력
array = [int(stdin.readline()) for _ in range(K)] #k만큼 입력받음
start , end = 1, max(array) #이진탐색을 위한 처음과 끝 설정


while start <= end: #처음이 끝을 넘거나 같을때까지
  mid = (start+end)//2 #중간값 설정
  line = 0 #선의 개수
  for i in array: 
    line += i // mid #선의 갯수 누적

  if line >= N: #만약 갯수를 넘거나 같아졌으면 
    start = mid + 1 # 스타트값 증가
  else: # 아니라면 끝값 1 감소
    end = mid - 1
print(end) 
