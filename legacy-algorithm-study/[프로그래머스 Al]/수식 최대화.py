import re
from itertools import permutations
def solution(expression):
    operators = list(permutations(['-','+','*'],3))
    answer= ''
    expression = re.split('([-+*])',expression)
    result = []
    for operation in operators :
        exp = expression[:]
        for op in operation:
            while op in exp :
                idx = exp.index(op)
                exp[idx-1] = str(eval(exp[idx -1]+ op + exp[idx+1]))
                del exp[idx:idx+2]
        result.append(abs(int(exp[0])))
        
        
            
    return max(result)
