def solution(X, A):
    if len(A) < X:
        return -1
    check = [False] * (X+1)
    check[0] = True
    position = 0
    for i in range(len(A)):
        if check[A[i]] == False:
            check[A[i]] = True
            while position < X and check[position+1] == True:
                position += 1
            if position == X:
                return i
    return -1
