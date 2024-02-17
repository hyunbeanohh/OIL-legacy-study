def droppedRequests(requestTime):
    """dropped = 0
    already_dropped = {}
    for i in range(len(requestTime)):
        if i > 2 and requestTime[i] == requestTime[i-3]:
            if requestTime[i] not in already_dropped or already_dropped[requestTime[i]] != i:
                already_dropped[requestTime[i]] = i
                dropped += 1
                print(i, requestTime[i])

        elif i > 19 and requestTime[i] - requestTime[i-20] < 10:
            if requestTime[i] not in already_dropped or already_dropped[requestTime[i]] != i:
                already_dropped[requestTime[i]] = i
                dropped += 1
                print(i, requestTime[i])

        elif i > 59 and requestTime[i] - requestTime[i-60] < 60:
            if requestTime[i] not in already_dropped or already_dropped[requestTime[i]] != i:
                already_dropped[requestTime[i]] = i
                dropped += 1
                print(i, requestTime[i])

    return dropped"""
    answer = 0
    for i in range(len(requestTime)):
        if i >2 and requestTime[i] == requestTime[i-3]:
            answer += 1
        elif i > 19 and (requestTime[i] - requestTime[i-20]) < 10:
            answer += 1
        elif i> 59 and (requestTime[i] - requestTime[i-60]) < 60:
            answer += 1
    return answer
n = 27
requestTime = [1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,11,11,11,11]
