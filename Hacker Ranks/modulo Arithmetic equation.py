def count(n, p):
    count = 0
    n_copy = n
    while n_copy > 1:
        count += n_copy // p
        n_copy //= p
    return count


def ArithmeticEquation(N):
    answer = 1
    isprime = [True] * (N + 1)
    for num in range(2, N + 1):
        if not isprime[num]:
            continue
        answer = answer * (2 * count(N, num) + 1) % 1000007
        for mul in range(2 * num, N + 1, num):
            isprime[mul] = False
    return answer
N = 1,65307
