def solution(distance, rocks, n):
    answer = 0
    rocks.sort() # 이분탐색을 위한 정렬
    left,right = 1,distance
    
    while left <= right :
        mid = left + (right - left) // 2
        pre_rock = 0 # 현재 위치를 담을 변수
        num_rock = 0 # 바위 개수 카운트 변수
        min_rock = 1000000001 # 최솟값
        
        for rock in rocks:
            rock_calc = rock - pre_rock # 바위끼리 거리를 계산
            if rock_calc < mid: # 중간값보다 작으면
                num_rock += 1 #제거 바위 + 1
            else: # 중간값보다 크거나 같으면 제거 못하니 최소값을 갱신하고 현재 위치를 변경
                min_rock = min(min_rock, rock_calc)
                pre_rock = rock
                
        if num_rock > n: # 바위를 너무 많이 제거했으니 mid 값을 축소
            right = mid - 1
        else: # 제거를 너무 적게 했거나 딱 맞으면 최솟값을 answer를 갱신하고 범위 축소
            answer = min_rock
            left = mid + 1
    return answer
