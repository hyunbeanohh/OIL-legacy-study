def solution(s):
    from collections import Counter
    zero,cnt = 0,0
    
    while s != '1':
        cnt += 1
        zero += Counter(s)['0']
        s = str(bin(int(Counter(s)['1']))).replace("0b","")
        
    
    return [cnt,zero]
