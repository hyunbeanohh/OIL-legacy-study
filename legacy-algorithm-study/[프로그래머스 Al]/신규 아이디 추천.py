def solution(new_id):
    #1 
    new_id = new_id.lower()
    answer = ''
    #2
    for idx in new_id:
        if idx.isalnum() or idx in ('-_.'):
            answer += idx
    #3
    while '..' in answer:
        answer = answer.replace('..','.')
    #4
    if answer.startswith('.'):
        answer = answer[1:]
    if answer.endswith('.'):
        answer = answer[:-1]
    #5
    if answer == '':
        answer += 'a'
    #6
    if len(answer) >= 16:
        answer = answer[:15]
        if answer.endswith('.'):
            answer = answer[:-1]
    #7
    if len(answer)<3:
        answer = answer + answer[-1]*(3-len(answer))
    return answer
