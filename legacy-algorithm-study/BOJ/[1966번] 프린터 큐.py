testcase = int(input())
for _ in range(testcase):
    n,m = map(int,input().split())
    queue = list(map(int,input().split()))
    imp = [0 for _ in range(n)]
    imp[m] = 1
    cnt = 0
    while True:
        if queue[0] == max(queue):
            cnt += 1
            if imp[0] == 1:
                print(cnt)
                break
            else:
                del queue[0]
                del imp[0]
        else:
            queue.append(queue[0])
            del queue[0]
            imp.append(imp[0])
            del imp[0]
