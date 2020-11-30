```
n = input()
arr = [-1 for _ in range(26)]

for i in range(len(n)):
  if arr[ord(n[i])-97] != -1:
    continue
  else:
    arr[ord(n[i])-97] = i

for i in range(26):
  print(arr[i], end= ' ')
```
