def solution(record):
    answer = []
    key_id = {}
    for rec in record:
        if rec.split(' ')[0] == 'Enter' or rec.split(' ')[0] == 'Change':
            key_id[rec.split(' ')[1]] = rec.split(' ')[2]
    
    
    for recoders in record:
        if recoders.split(' ')[0] == 'Enter':
            answer.append('{}님이 들어왔습니다.'.format(key_id[recoders.split(' ')[1]]))
        elif recoders.split(' ')[0] == 'Leave':
            answer.append('{}님이 나갔습니다.'.format(key_id[recoders.split(' ')[1]]))
        else:
            pass
    return answer
