def solution(numbers):

    numbers = list(map(str,numbers))
    numbers = sorted(numbers,key = lambda a : a*3, reverse=True)
    numbers = str(int(''.join(numbers)))
    return numbers
    
