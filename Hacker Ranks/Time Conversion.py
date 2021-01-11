#!/bin/python3

import os
import sys

#
# Complete the timeConversion function below.
#
def timeConversion(s):
    slist = s.split(':')
    
    if s[8:len(s)] =='PM':
        if slist[0] != '12':
            slist[0] = int(slist[0])
            slist[0] += 12
            slist[0] = str(slist[0])
        slist = ':'.join(slist)
        
    if s[8:len(s)] == 'AM':
        if slist[0] == '12' or slist[0] =='00':
            slist[0] = '00'
        slist = ':'.join(slist)
        
    return slist[0:len(slist)-2]

if __name__ == '__main__':
    f = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    f.write(result + '\n')

    f.close()
