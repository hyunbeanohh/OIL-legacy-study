def solution(n):
    return Fibonachi(n)%1234567

def Fibonachi(num):
    li = [0,1]
    for i in range(2,num+1):
        if num <2:
            break;
        if num >= 2:
            li.append(li[i-1]+li[i-2])
    return li[-1]
