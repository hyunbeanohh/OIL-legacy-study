from collections improt Counter
  def solution(A):
    answer = 0
    counter = Counter(A)
    for key,index in counter.items():
        if index % 2 == 1:
            answer = key
    return answer
