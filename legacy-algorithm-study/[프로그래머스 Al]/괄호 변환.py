def check(p):
    stack = []
    for i in list(p):
        if i =='(':
            stack.append('(')
        else:
            try :
                stack.pop()
            except :
                return False
    if len(stack) == 0:
        return True
    else:
        return False
    
def balanced(p):
    cnt = 0
    for idx in range(len(p)):
        if p[idx] == '(':
            cnt += 1
        else: 
            cnt -= 1
        if cnt == 0:
            return (idx +1)
    return idx+1
    
def solution(p):
    answer = ''
    
    if (p == '' ) | (check(p) == True) :
        return p
    
    idx = balanced(p)
    u,v = p[:idx], p[idx:]
    
    if check(u) :
        answer = u + solution(v)
    else:
        answer = '(' + solution(v) + ')'
        u = u[1:-1].replace('(', 'a')
        u = u.replace(')', 'b')
        u = u.replace('a', ')')
        u = u.replace('b', '(')
        answer = answer + u
        
    return answer
