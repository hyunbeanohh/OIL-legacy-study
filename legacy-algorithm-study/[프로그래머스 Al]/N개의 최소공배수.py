from fractions import gcd
def solution(arr):
    answer = 0
    while len(arr) > 1:
        n,m = arr.pop(),arr.pop()
        arr.append(n*m // gcd(n,m))
    return arr.pop()
