def solution(routes):
    routes.sort()
    temp = routes[0][1]
    routes.pop(0)
    camera = 1
    
    
    for route in routes:
        if route[0] <= temp:
            temp = min(temp, route[1])
        else:
            temp = route[1]
            camera += 1
    
    return camera
