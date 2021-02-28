```
from collections import Counter
n = input()
n_upper = n.upper()
answer = []

Counter = Counter(n_upper)

max_value = max(list(Counter.values()))

for i in list(Counter.keys()):
  if Counter[i] == max_value:
    answer.append(i)
if len(answer) > 1:
  print('?')
else:
  print(answer[0])
```
