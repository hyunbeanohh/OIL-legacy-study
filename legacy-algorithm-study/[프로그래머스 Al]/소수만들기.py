def isCheck(result) :
    if result>1:
        for i in range(2,result):
            if result % i == 0:
                return False
    else:
    return True

def solution(nums):
    answer = 0
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            for k in range(j+1,len(nums)):
                result = nums[i]+nums[j]+nums[k]
                if isCheck(result) == True:
                    answer += 1
    return answer



def isCheck(a,b,c) :
    result = a+b+c
    
    if result>1:
        for i in range(2,result):
            if result % i == 0:
                return False
    else:
        return False
    return True

def solution(nums):
    from itertools import combinations
    answer = 0
    combi = list(combinations(nums,3))
    for i in combi:
        if isCheck(i[0],i[1],i[2]) == True: answer += 1
    return answer
