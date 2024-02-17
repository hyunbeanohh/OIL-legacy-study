n = int(input()) #입력 값
arr = list(map(int,input().split())) #띄어쓰기 구분으로 배열 입력
stack = [] #스택 생성
result = [-1 for _ in range(n)] #n의 크기만큼 -1을 가진 배열 생성
stack.append(0) #stack에 0을 append , 처음에 비교할 값
i = 1 #while 문이 돌면서 +1

while stack and i<n: #stack의 크기가 비고 i가 n보다 작아질때까지
    while stack and arr[stack[-1]] < arr[i] :#stack의 크기가 비고 stack의 top이 arr[i]보다 작으면
        result[stack[-1]] = arr[i] #result에서 stack의 top을 더 큰 배열로 교체
        stack.pop() #작은 배열 pop
    stack.append(i)
    i += 1
for i in range(n):
    print(result[i],end=' ')
    
