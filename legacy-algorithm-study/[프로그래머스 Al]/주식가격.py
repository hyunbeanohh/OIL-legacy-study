# for i in range(len(a)-1):
#   print(i,i+1)
#   if a[i] > a[i+1]: # 현재 주식이 다음 주식보다 가격이 낮다면 배열에 1추가
#     answer.append(1)
#   else: # 주식이 더 높다면 배열 크기에 주식의 인덱스 값 +1 한 값을 빼준 후 배열에 추가
#     answer.append(len(a)-(i+1))
# answer.append(0) # 마지막 주식은 가격변동이 없으니 제일 마지막 배열에 0 추가
# print(answer)


for i in range(len(a)-1):
  for j in range(i,len(a)-1):
    if a[i] > a[j]:
      break
    else:
      answer[i] += 1
print(answer)

