```
#!/bin/python3

import os
import sys

#
# Complete the plusMinus function below.
#
def plusMinus(arr):
    cnt = 0
    answer = []
    
    for i in arr:
        if i > 0:
            cnt += 1
    div = ('%0.6f'%float(cnt/n))
    answer.append(div)
    cnt = 0
    print(answer[0])
    for i in arr:   
        if i < 0:
            cnt += 1
    div = ('%0.6f'%float(cnt/n))
    answer.append(div)
    cnt = 0
    print(answer[1])
    for i in arr:   
        if i == 0:
            cnt += 1
    div = ('%0.6f'%float(cnt/n))
    answer.append(div)
    cnt = 0
    print(answer[2])
    


    
if __name__ == '__main__':
    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
```
