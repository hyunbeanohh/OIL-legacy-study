answer = {'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0}
n = str(input())

for i in range(len(n)):
    if n[i] in ('6','9'):
        answer['6'] += 1
    else:
        answer[n[i]] += 1

if answer['6'] % 2 == 0:
    answer['6'] = answer['6'] //2
else:
    answer['6'] = answer['6'] //2 +1
print(max(answer.values()))
