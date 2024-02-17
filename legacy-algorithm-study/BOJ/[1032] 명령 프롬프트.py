n = int(input())
a = list(input())
alen = len(a)

for i in range(n - 1):
    b = list(input())
    for j in range(alen):
        if a[j] != b[j]:
            a[j] = '?'
print(''.join(a))
