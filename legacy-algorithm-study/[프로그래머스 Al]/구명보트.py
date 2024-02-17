def solution(people, limit):
    count = 0 # 답 카운트
    fcount = 0 
    pcount = len(people) -1 
    people.sort()
    
    while fcount <= pcount :
        count += 1
        if people[pcount] + people[fcount]<= limit:
            fcount +=1
        pcount -= 1
        
    return count
#순서도
# 0 <= 3
# count = 1
# if [0] + [3] <= 100 = 50 + 80 <= 100 ?
#아니면 pSize -= 1  3 - 1 = 2
#0 <= 2
#count = 2
# if [0] + [2] <= 100 = 50 + 70 <= 120 ?
#아니면 pSize -= 1 2 - 1 = 1
# 0 <= 1
#count = 3
#아니면 if [0] + [1] <= 100 = 50 + 50 <= 100?
# fSize += 1 0 + 1 = 1
#pSize -= 1 = 1 - 1 = 0
# 1 <= 0 이므로 while문 종료
#count = 3
    
