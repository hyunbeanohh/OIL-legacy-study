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
