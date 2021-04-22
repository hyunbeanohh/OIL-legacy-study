"""from itertools import groupby
from collections import Counter

inp_str = "CaCbCgCdC888834A"
answer = []
cnt = 0
check = [False]*4

if len(inp_str) <8 or len(inp_str) > 15:
    answer.append(1)

import re

def passwordValidate(pwd):
    global cnt
    global check

    if len(pwd) < 8 and len(pwd) > 15:
        answer.append(1)

    if re.search('[a-z]+', pwd) is None:
        cnt += 1
        check[0] = True
    elif re.search('[A-Z]+', pwd) is None:
        cnt += 1
        check[1] = True
    elif re.search('[0-9]+', pwd) is None:
        cnt += 1
        check[2] = True
    elif re.search(('[~!@#$%^&*]+'), pwd) is None:
        cnt += 1
        check[3] = True

    if re.search('[^a-zA-Z0-9~!@#$%^&*]+', pwd) is None:
        pass
    else:
        answer.append(2)
    if cnt >= 1:
        answer.append(3)

passwordValidate(inp_str)


max_cnt = max([len(list(g)) for k,g in groupby(inp_str)])
if max_cnt >= 4:
    answer.append(4)
    
counter = (Counter(inp_str).most_common())
if counter[0][1] >= 5:
    answer.append(5)

if len(answer) == 0:
    print([0])
else:
    print(answer)
"""
from collections import Counter
from itertools import groupby

def solution(inp_str):
    answer = []
    if not 8<= len(inp_str) < 15 :
        answer.append(1)
    check = [0,0,0,0]

    for str in inp_str:
        if 2 not in answer and str.isalpha() == False and str.isdigit() == False and (str not in "~!@#$%^&*"):
            answer.append(2)
        else:
            if str.isupper():
                check[0] = 1
            if str.islower():
                check[1] = 1
            if str.isdigit():
                check[2] = 1
            if str in "~!@#$%^&*":
                check[3] = 1

    if check.count(1) < 3:
        answer.append(3)

    max_cnt = max([len(list(g)) for k, g in groupby(inp_str)])
    if max_cnt >= 4:
        answer.append(4)


    counter = Counter(inp_str).most_common()
    if counter[0][1] >= 5:
        answer.append(5)

    if len(answer) == 0:
        return [0]
    else:
        return sorted(answer)

print(solution("AaTa+!12-3"))
print(solution("aaaaZZZZ)"))
print(solution("CaCbCgCdC888834A"))
print(solution("UUUUU"))
print(solution("ZzZz9Z824"))



