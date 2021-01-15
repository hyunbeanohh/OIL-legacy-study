#!/bin/python3

import math
import os
import random
import re
import sys
from collections import Counter
# Complete the sockMerchant function below.
def sockMerchant(n, ar):
    counter = Counter(ar)
    pairsocks = list(counter.values())
    cnt = 0
    for i in range(len(pairsocks)):
        pairsocks[i] = pairsocks[i]//2
    return sum(pairsocks)
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    ar = list(map(int, input().rstrip().split()))

    result = sockMerchant(n, ar)

    fptr.write(str(result) + '\n')

    fptr.close()
