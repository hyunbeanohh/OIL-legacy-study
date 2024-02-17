import heapq
import sys
heap = []

tc = int(input())
for i in range(tc):
    answer = int(sys.stdin.readline())

    if answer != 0 :
        heapq.heappush(heap,(abs(answer),answer))
    else:
        if answer == 0 and len(heap) != 0 :
            print(heapq.heappop(heap)[1])
        elif answer == 0 and len(heap) == 0:
            print(0)
