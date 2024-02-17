import heapq #힙 선언
def solution(scoville, K):
    heap = []
    answer = 0
    cnt = 0
    
    for i in scoville:
        heapq.heappush(heap,i) #힙에 푸쉬
    while heap[0] <K: # 힙은 푸쉬 팝 할 때 마다 자동으로 정렬이 되므로 0번째 인덱스가 k보다 크면 모두 큼
        try:
            heapq.heappush(heap,heapq.heappop(heap)+heapq.heappop(heap)*2)
        except IndexError: # 인덱스 에러는 모든 수가 k이상 증가할 수 없는것 이기에 return -1
            return -1
        cnt += 1
    return cnt


import heapq
def solution(scoville, K):
    
    answer = -1
    cnt = 0
    check_flag = False
    
    heapscoville = heapq.heapify(scoville)
    
    
    while scoville[0]<K:
        min_first = heapq.heappop(scoville)
        min_second = heapq.heappop(scoville)
        
        heapq.heappush(scoville, min_first+(min_second*2))
        
        if len(scoville) == 1 and scoville[0] <K:
            check_flag = True
            break
            
        cnt += 1
        
    if check_flag == False:
        answer = cnt
        
    return answer

