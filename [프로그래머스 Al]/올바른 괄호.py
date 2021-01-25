```
def solution(s):
    li = list()
    for i in s:
        if i == '(':
            li.append(i)
            
        if i == ')':
            try:
                li.pop()
            except IndexError:
                return False
        
    return len(li) == 0
```

```
def solution(s):

    from collections import deque
    answer = True
    deque = deque()
    for str in s:
        if str == '(':
            deque.append(str)
        else:
            if len(deque) == 0 or deque.pop() == ')':
                return False
            
    if len(deque) != 0:
        return False
 ```
