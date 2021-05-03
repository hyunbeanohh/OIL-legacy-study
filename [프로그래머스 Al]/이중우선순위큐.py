import heapq
def solution(operations):
    heap = []
    
    for ope in operations:
        if ope.startswith('I'):
            heapq.heappush(heap,int(ope[2:]))
        elif heap and ope == 'D 1':
            heap.pop()
        elif heap and ope == 'D -1':
            heap.pop(0)
        
    if not heap:
        return [0,0]
    else:
        return [max(heap),min(heap)]
