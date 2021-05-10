import heapq
import sys


heap = []
tc = int(input())
timetable = [list(map(int,sys.stdin.readline().split())) for _ in range(tc)]
timetable.sort(key=lambda a:a[0])

heapq.heappush(heap,timetable[0][1])

for i in range(1,tc):
    if heap[0] > timetable[i][0]:
        heapq.heappush(heap,timetable[i][1])
    else:
        heapq.heappop(heap)
        heapq.heappush(heap,timetable[i][1])
        
print(len(heap))
