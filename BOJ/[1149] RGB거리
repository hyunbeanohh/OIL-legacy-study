n = int(input())
d = [[0]*3 for _ in range(n)]

for i in range(n):
    d.append(list(map(int, input().split())))

for i in range(1,len(d)):
    d[i][0] = min(d[i - 1][1], d[i - 1][2]) + d[i][0] 
    d[i][1] = min(d[i - 1][0], d[i - 1][2]) + d[i][1]
    d[i][2] = min(d[i - 1][0], d[i - 1][1]) + d[i][2]
print(min(d[i][0],d[i][1],d[i][2]))

#만약 빨간 집을 골랐을 경우 나머지 두 집의 최솟값을 더한 값이 최솟값이다.
#예를들어 26 40 83이라면 빨간집(26)을 골랐을 때 최솟값(40,83)은 40 이기에 26+40이 
#빨간 집을 칠하는 최소의 비용이다.
