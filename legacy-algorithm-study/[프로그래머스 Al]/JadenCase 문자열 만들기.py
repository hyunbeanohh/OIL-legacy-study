def solution(s):
    answer = ''
    s= s.lower()
    k = s.split(' ')
    for i in k:
        k = i.capitalize()
        answer += k +' '
    return answer[:-1]
