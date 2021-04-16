from collections import Counter
k = 4
scores = [100,50,50,25]

def numPlayers(k, scores):
    counter = Counter(scores)
    answer, current_rank = 0 , 1
    for i,j in sorted(counter.items(),reverse=True):
        if current_rank > k:
            break
        answer += j
        current_rank += j
    return answer
print(numPlayers(k,scores))
