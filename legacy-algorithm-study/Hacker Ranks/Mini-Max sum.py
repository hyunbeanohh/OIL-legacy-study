#!/bin/python3

import os
import sys

#
# Complete the miniMaxSum function below.
#
def miniMaxSum(arr):
    arr.sort()
    mini = sum(arr[0:4])
    maxi = sum(arr[1:len(arr)])
    
    print(mini,maxi)
if __name__ == '__main__':
    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)

