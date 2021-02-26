str1 = input()
str2 = input()
n = len(str1)
m = len(str2)

LCS = [[0] * (m+1) for _ in range(n+1)]

for i in range(1,n+1):
    for j in range(1,m+1):
        if str1[i-1] == str2[j-1]:
            LCS[i][j] = LCS[i-1][j-1] + 1
        else:
            LCS[i][j] = max(LCS[i-1][j],LCS[i][j-1])
print(LCS[n][m])
