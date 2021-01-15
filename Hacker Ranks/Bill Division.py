#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the bonAppetit function below.
def bonAppetit(bill, k, b):
    
    anna = bill[k]
    bill.pop(k)
    cal = sum(bill)//2
    
    if b == cal :
        print('Bon Appetit')
    else:
        print(b-cal)
    
if __name__ == '__main__':
    nk = input().rstrip().split()

    n = int(nk[0])

    k = int(nk[1])

    bill = list(map(int, input().rstrip().split()))

    b = int(input().strip())

    bonAppetit(bill, k, b)
