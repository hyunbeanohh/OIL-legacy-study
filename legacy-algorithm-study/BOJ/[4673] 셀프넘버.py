def selfNum(a):
    return a+sum([int(i) for i in str(a)])

arr =[0] *10000

for i in range(10000):
    if selfNum(i)<10000:
        arr[selfNum(i)] = 1
        
for j in range(10000):
    if arr[j] == 0:
        print(j)
