from collections import deque
def checker (one,two): # 단어가 몇개 차이나는지 체크 ( 1개이상은 불필요함으로 break)
    count = 0
    for i in range(len(one)):
        if one[i] != two[i]:
            count += 1
        if count >1:
            break 
    return count
def bfs(begin,target,words):
    answer = 0
    check = [False for i in range(len(words))]
    dq = deque()
    dq.appendleft(begin)
    
    while len(dq) > 0:
        answer += 1
        for i in range(len(dq)):
            current_word = dq.pop()
            
            for i, word in enumerate(words):
                if check[i] == False and checker(current_word, word) == 1: # 방문하지 않았고 단어의 차이가 1개가 나면 그 단어로 변환 
                    check[i] = True
                    dq.appendleft(word)
                    if word == target:
                        return answer
    return 0

def solution(begin, target, words):
    answer = bfs(begin,target,words)
    return answer
