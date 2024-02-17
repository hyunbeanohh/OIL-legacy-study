from itertools import combinations

vowels = ('a','e','i','o','u') # 모음
l,c = map(int,input().split())

array = input().split()
array.sort()

for password in combinations(array,l):
  count = 0 # 패스워드에 포함된 각 문자를 확인하며 모음의 개수를 세기 
  for i in password:
    if i in vowels:
      count += 1
  if count >= 1 and count <= l - 2: # 모음은 최소 1개, 자음은 최소 2개
    print(''.join(password))
