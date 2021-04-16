def getMostVisited(n, sprints):
    incre_mental = [0] * (n + 2)

    for i in range(len(sprints) - 1):
        start = min(sprints[i], sprints[i + 1])
        end = max(sprints[i], sprints[i + 1])
        incre_mental[start] += 1
        incre_mental[end + 1] -= 1

    scores = [0] * (n + 1)
    score = 0

    for i in range(1, n + 1):
        score += incre_mental[i]
        scores[i] = score
    return scores.index(max(scores))

n = 10
sprints = [1,5,10,3]
