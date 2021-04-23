# 반복문
def solution(n, results):
    answer = 0
    score = [[0] * n for _ in range(n)]
    win , lose = 1, -1
    
    for i,j in results:
        score[i-1][j-1] , score[j-1][i-1] = win,lose
    
    for k in range(n):
        wins = [a for a,b in enumerate(score[k]) if b == win]
        
        while wins:
            loser = wins.pop()
            for a,b in enumerate(score[loser]):
                if b == win and score[k][a] == 0:
                    score[k][a] , score[a][k] = win ,lose
                    wins.append(a)
    return len(['check' for i in score if i.count(0) == 1])
                    
    return answer
# 딕셔너리
def solution(n, results):
    answer = 0
    score = [[0] * n for _ in range(n)]
    win , lose = 1, -1

    for i,j in results:
        score[i-1][j-1] , score[j-1][i-1] = win,lose

    for k in range(n):
        wins = [a for a,b in enumerate(score[k]) if b == win]

        while wins:
            loser = wins.pop()
            for a,b in enumerate(score[loser]):
                if b == win and score[k][a] == 0:
                    score[k][a] , score[a][k] = win ,lose
                    wins.append(a)
    return len(['check' for i in score if i.count(0) == 1])

    return answer
