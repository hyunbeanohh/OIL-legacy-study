def formingMagicSquare(s):
    n = len(s)
    arr = [[0]*n for i in range(n)]
    
    r = 0
    c = n//2
    arr[r][c] = 1
    for i in range(2,n*n+1):
        if arr[n-1 if r-1<0 else r-1][0 if c+1>n-1 else c+1] == 0:
            r = n-1 if r-1<0 else r -1
            c = 0 if c+1>n-1 else c +1
            arr[r][c] = i
        
        else:
            r = 0 if r+1>n-1 else r+1
            arr[r][c] = i
    return arr
