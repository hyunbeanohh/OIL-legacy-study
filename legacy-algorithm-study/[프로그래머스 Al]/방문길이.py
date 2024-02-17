def solution(dirs):
    dx,dy = [-1,0,1,0], [0,-1,0,1]
    move_type = {'U':0,'L':1,'D':2,'R':3}
    answer = 0
    visited_add = set()
    x,y, = 0,0

    for dir in dirs:
        i = move_type[dir]
        nx = x + dx[i]
        ny = y + dy[i]
        if nx > 5 or nx < -5 or ny >5 or ny < -5 :
            continue
        if (x,y,nx,ny) not in visited_add:
            visited_add.add((nx,ny,x,y))
            visited_add.add((x,y,nx,ny))
            answer += 1
        x,y = nx,ny
            
    return answer
