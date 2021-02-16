def solution(N):
  binnum = bin(N)[2:]
  answer = []
  cnt = 0
  for i in list(str(binnum)):
    if i == '0':
      cnt += 1
    if i == '1':
      answer.append(cnt)
      cnt = 0
  return max(answer)
