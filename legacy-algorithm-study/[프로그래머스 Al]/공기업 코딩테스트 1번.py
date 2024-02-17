배열에 존재하는 수들의 최대 공배수를 리턴하라 .

arr = list(map(int, input().rstrip().split()))

def gcdNumber(a,b):
	while b != 0:
		a, b = b, a%b
	return a
  
  gcdarr = arr[0]
  for i in range(len(arr)):
	gcdarr = gcdNumber(gcdarr,arr[i])
	print("result :",gcdarr)
