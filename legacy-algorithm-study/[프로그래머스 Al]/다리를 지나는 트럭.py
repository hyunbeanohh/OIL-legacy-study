def solution(bridge_length, weight, truck_weights):
    cnt = 0
    current_truck = [0] * bridge_length
    
    while current_truck :
        cnt += 1
        current_truck.pop(0)
        
        if truck_weights:
            if sum(current_truck) + truck_weights[0] <= weight:
                current_truck.append(truck_weights.pop(0))
            else:
                current_truck.append(0)
    
    return cnt
