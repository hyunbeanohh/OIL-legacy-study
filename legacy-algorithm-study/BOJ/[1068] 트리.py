import sys

def dfs(root):
    global cnt
    tag = False
    visited[root] = True # 방문처리
    for i in range(n):
        if not visited[i] and graph[root][i] : #방문하지 않았다면 태그를 True처리 dfs 실행
            tag = True
            dfs(i)
    if not tag: # False 면 cnt 증가 - 노드가 삭제 됨
        cnt += 1
    
n = int(input())
tree = list(map(int,sys.stdin.readline().split()))
del_node = int(input())

visited = [False] * n
graph = [[False] * n for _ in range(n)]
cnt = 0

for i in range(n):
    if tree[i] != -1: # 삭제되는 노드가 아니라면 해당 노드들을 참 처리
        graph[i][tree[i]] = True
        graph[tree[i]][i] = True
    else: # -1 이라면 root를 해당 인덱스를 가르키게 함
        root = i
        
for i in range(n): # 지우는 노드에 대한 인덱스는 거짓 처리
    graph[i][del_node] = False
    graph[del_node][i] = False
    
dfs(root) #dfs 실행

if del_node == root: # 지워지는게 없으면
    print(0)
else:
    print(cnt)
        
