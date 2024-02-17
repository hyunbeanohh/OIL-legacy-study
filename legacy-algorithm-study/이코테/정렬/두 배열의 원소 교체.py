n,k = map(int,(input().split())) # N과 K를 입력받기.
Alist = list(map(int,input().split())) # 배열 A의 원소 받기
Blist = list(map(int,input().split())) # 배열 B의 원소 받기

Alist.sort() #오름차순 정렬
Blist.sort(reverse=True) #내림차순 정렬

for i in range(k): #첫 번째 인덱스부터 확인하며, 두 배열의 원소를 최대 K번 비교
  if Alist[i] <Blist[i]: # A의 원소가 B의 원소보다 작을 경우
    Alist[i], Blist[i] = Blist[i],Alist[i] #두 원소를 교체
  else:
    break # A의 원소가 B의 원소보다 크거나 같을 때, 반복문을 탈출
print(sum(Alist)) #배열 A의 모든 원소의 합을 출력

