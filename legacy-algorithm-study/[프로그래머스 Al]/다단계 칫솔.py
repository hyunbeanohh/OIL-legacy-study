def solution(enroll, referral, seller, amount):
    tree = {'-':'root'}
    sell = {'-':0}
    answer = []
    
    for i in range(len(enroll)):
        child = enroll[i]
        parent = referral[i]
        sell[child] = 0
        tree[child] = parent
        
    for i in range(len(seller)):
        child = seller[i]
        parent = tree[child]
        money = amount[i] * 100
        sell[child] += money
        while True:
            commision = money // 10
            sell[child] -= commision
            sell[parent] += commision
            child = parent
            parent = tree[child]
            money = commision
            if parent == 'root':
                break
    for person in enroll:
        answer.append(sell[person])
        
    return answer
