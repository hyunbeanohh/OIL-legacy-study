def solution(N, stages):
    dic = {}
    allPlayer = len(stages) #스테이지 수  만큼 플레이어 존재 
    
    for i in range(1,N+1):
        notClearplayer = stages.count(i) 
        
        if allPlayer == 0 :
            failRate = 0
        else:
            failRate = notClearplayer / allPlayer
        dic[i] = failRate
        allPlayer -= notClearplayer #스테이지 지난 수만큼 전체 플레이어 수에서 빼줌

    
    dicSort = sorted(dic.items(), key =lambda a : a[1],reverse = True)
    result = [dicSort[i][0] for i in range(len(dicSort))]
        
    return result


def solution(N,stages):
  answer = []
  length = len(stages)

  # 스테이지 번호를 1부터 N까지 증가시키기
  for i in range(1,N+1):
    # 해당 스테이지에 머물러 있는 사람의 수 계산
    count = stages.count(i)
    
    # 실패율 계산
    if length == 0 :
      fail = 0
    else:
      fail = count / length

    # 리스트에 원소 삽입(스테이지 번호, 실패율)
    answer.append((i,fail))
    length -= count

  # 실패율을 기준으로 각 스테이지를 내림차순 정렬
  answer = sorted(answer, key = lambda x:x[1],reverse=True)
  
  # 정렬된 스테이지 번호 출력
  answer = [i[0] for i in answer]
  return answer

print(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]))
