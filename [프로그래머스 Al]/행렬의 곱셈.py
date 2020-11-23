def solution(A, B):
    return [[sum(i*j for i,j in zip(A_row,B_col))for B_col in zip(*B)] for A_row in A]
    
def solution(A, B):
    answer = [[0 for _ in range(len(B[0]))] for _ in range(len(A))]
    for i in range(len(A)):
        for j in range(len(B[0])):
            for k in range(len(A[1])):
                answer[i][j] += (A[i][k]*B[k][j])
    return answer
