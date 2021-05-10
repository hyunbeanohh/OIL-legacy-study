import heapq
import sys
heap = []

n = int(input())

for i in range(n):
    answer = int(sys.stdin.readline())
    if answer != 0 :
        heapq.heappush(heap,answer)
    else:
        if answer == 0 and len(heap) == 0:
            print(0)
        else:
            print(heapq.heappop(heap))
