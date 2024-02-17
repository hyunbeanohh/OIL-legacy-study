def solution(priorities, location):
    answer = 0
    while len(priorities) != 0: #priorities의 크키가 0이 아닐때 까지
        if location == 0:#위치가 0이라면
            if priorities[0] < max(priorities): # 더 중요도가 큰 문서가 존재한다면
                priorities.append(priorities.pop(0)) #제일 끝으로 보냄
                location = len(priorities)-1 # location을 제일 마지막으로 보낸것으로 설정
            else:
                return answer +1 
        else:
            if priorities[0] < max(priorities):
                priorities.append(priorities.pop(0))
                location -= 1 #맨 앞 요소가 뒤로 갔기 때문에 위치 -1
            else:
                priorities.pop(0) #맨 앞 요소 출력됨
                location -= 1 #출력했기 때문에 -1
                answer += 1 #출력번째수 +1
    return answer              
                
                
 def solution(priorities, location):
    answer = 0 
    from collections import deque # 컬렉션 라이브러리의 디큐 선언
    d = deque([(i,j) for j,i in enumerate(priorities)]) # enumerate를 이용
    
    while len(d):
        items = d.popleft()
        if d and max(d)[0] > items[0]:
            d.append(items)
        else:
            answer += 1
            if items[1] == location:
                break
            
    return answer
