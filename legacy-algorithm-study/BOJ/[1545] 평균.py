n = int(input())
answer = list(map(int,input().split()))
maxscore = max(answer)
for i in range(n):
  answer[i] = answer[i] / maxscore * 100 
print(sum(answer)/n)
