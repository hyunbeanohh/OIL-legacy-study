n = int(input())
start = 1 # 처음 시작
plus = 6 # 6씩 증가하는 수열
room = 1 #지나가는 방의 개수

if n == 1:
  print(1) # 입력값이 1이라면 방은 1개
else:
  while True:
    start += plus # 시작 값에 수열을 더해줌
    room += 1 #지나가는 방의 개수 +1
    if n <= start : #입력 값이 수열의 마지막 값보다 작다면
      print(room) #지나간 방의 개수 출력
      break #반복문 종료
    plus += 6 #끝나지 않았다면 수열은 6씩 증가하므로 6증가
