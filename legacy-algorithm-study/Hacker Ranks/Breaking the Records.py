#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the breakingRecords function below.
def breakingRecords(scores):
    maxnum = scores[0]
    minnum = scores[0]
    cnt = [0,0]
    for i in range(len(scores)):
        if scores[i] > maxnum:
            maxnum = scores[i]
            cnt[0]+= 1
        if scores[i] < minnum:
            minnum = scores[i]
            cnt[1]+= 1
    return cnt
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    scores = list(map(int, input().rstrip().split()))

    result = breakingRecords(scores)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
