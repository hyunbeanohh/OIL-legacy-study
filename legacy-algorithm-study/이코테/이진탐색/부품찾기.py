def binary_search(array,target,start,end):
  while start <= end:
    mid = (start+end) //2
    if array[mid] == target :
      return mid
    elif array[mid] > target:
      end = mid - 1
    else: 
      start = mid +1
  return None

#부품의 개수 입력
N = int(input())
#가게에 있는 전체 부품 입력
array = list(map(int,input().split()))
array.sort()#이진 탐색을 위한 정렬
#손님이 요청한 부품의 개수 입력
M = int(input())
X = list(map(int,input().split()))

#손님이 요청한 부품 번호를 하나씩 확인
for i in X:
  result = binary_search(array,i,0,N-1)
  if result != None:
    print('YES', end = ' ')
  else:
    print('NO', end = ' ')
