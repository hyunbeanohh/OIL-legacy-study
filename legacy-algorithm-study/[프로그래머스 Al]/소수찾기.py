from itertools import permutations
n = "17"
answer = 0

nlist = list(n) # 숫자로 이루어진 문자열을 쪼개서 List로 반환

for i in range(2,len(n)+1): 
  perlist = permutations(n,i) # permutations를 통해 조합구하기
  for j in perlist: 
    if len(j) <= len(n): #구한 조합의 크기가 원래 문자열보다 작다면
      nlist.append(''.join(j)) # join을 이용해서 합치기
nlist = list(set([int(i) for i in nlist])) #set을 이용하여 에라토스테네스의 체 구현하기.
#set을 이용해서 중복 삭제

if nlist.count(0): #0에 해당하는 것들 삭제
  nlist.remove(0)
if nlist.count(1): #1에 해당하는 것들 삭제
  nlist.remove(1)

for x in nlist : #소수 구하기
  i = 2
  while i*i <= x: #i 제곱의 값이 x보다 작거나 같을때까지
    if x % i == 0: # 나눈값이 떨어진다면
      answer -= 1 
      break
    i += 1 
  answer += 1

print(answer)
