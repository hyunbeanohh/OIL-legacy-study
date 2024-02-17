n,m = map(int,input().split())
data = []

def solve(depth,idx,n,m):
    if depth == m:
        print(' '.join(map(str,data)))
        return
    for i in range(idx,n):
        data.append(i+1)
        solve(depth+1,i,n,m)
        data.pop()
solve(0,0,n,m)
