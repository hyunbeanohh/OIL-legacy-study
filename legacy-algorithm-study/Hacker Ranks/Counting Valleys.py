#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'countingValleys' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER steps
#  2. STRING path
#

def countingValleys(steps, path):
    cnt = 0
    seastep = 0
    for i in range(len(path)):
        if path[i] =='U':
            seastep += 1
            
        if path[i] =='D':
            seastep -= 1
            
        if seastep == 0 and path[i] == 'U':
            cnt += 1
    return cnt
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    steps = int(input().strip())

    path = input()

    result = countingValleys(steps, path)

    fptr.write(str(result) + '\n')

    fptr.close()
