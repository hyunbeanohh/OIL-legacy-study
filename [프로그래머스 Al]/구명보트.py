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
