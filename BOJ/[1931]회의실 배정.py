n = int(input()) #회의 시간 입력

time = sorted([tuple(map(int,input().split()))for _ in range(n)],key = lambda a : (a[1],a[0]))
# 회의 끝나는 시간과 시작 시간에따라 오름차순 정렬한 후 튜플로 묶어줌
#print(list(time))

answer = 0 
end = 0

for i,j in time : #i : 시작시간 , j : 끝나는시간
  if i >= end: # 시작시간이 끝나는시간보다 크면
    answer += 1 # 1증가
    end = j #끝나는 시간을 바꿈
print(answer)
