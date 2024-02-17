n,m = map(int,input().split())
n_list = []
m_list = []

for _ in range(n):
    n_list.append(input())
for _ in range(m):
    m_list.append(input())

set_list = list(set(n_list) & set(m_list))

print(len(set_list))
for i in  sorted(set_list):
    print(i)
