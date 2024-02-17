def solution(numbers, target):
    answer = 0
    lenNumbers = len(numbers)

    def DFS(index = 0 ): 
        if index<lenNumbers: #현재 크기가 numbers의 크기와 같아질때 까지 
            numbers[index] *= 1 # 양수의 자식 생성
            DFS(index+1) # 크기 1증가

            numbers[index] *= -1 #음수의 자식 생성
            DFS(index +1) #크기 1증가
        elif sum(numbers) == target: #numbers의 합이 타겟넘버와 같아지면
            nonlocal answer #전역 변수인 answer에 접근
            answer += 1 # +1해준다
    DFS() #재귀 
    return answer
