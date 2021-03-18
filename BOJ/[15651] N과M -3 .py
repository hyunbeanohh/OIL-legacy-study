n,m = map(int,input().split())
data = []
def solve(depth,n,m):
  if depth == m:
    print(' '.join(map(str,data)))
    return  
  for i in range(n):
    data.append(i+1)
    solve(depth+1,n,m)
    data.pop()
solve(0,n,m)
