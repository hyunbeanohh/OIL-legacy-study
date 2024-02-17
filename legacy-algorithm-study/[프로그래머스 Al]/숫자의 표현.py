def solution(n):
    answer = 0
    cnt = 0
    for i in range(1,n): #0은 제외하고 시작.
        sum = i # for문이 초기화 될 때마다 새로 시작되는 i의 값을 받음
        for j in range(i+1,n):
            sum += j #i+1한 값부터 j를 시작해 n까지 더함
            if sum == n: # 만약 더한 값이 n값과 같아 진다면 경우의 수 answer + 1
                answer += 1
                break
            elif sum>n: #더한 값이 n보다 커졌다면 반복문에서 벗어남.
                break
    return answer+1 #자기 자신 값까지 포함해야 하기 때문에 +1
 ```
 
 ```
 def solution(num):
    return len([i  for i in range(1,num+1,2) if num % i is 0])
