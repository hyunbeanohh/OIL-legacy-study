table = ["SI JAVA JAVASCRIPT SQL PYTHON C#",
         "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
         "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
         "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
         "GAME C++ C# JAVASCRIPT C JAVA"]
language = ['JAVA','JAVASCRIPT']
preference = [7,5]

score = []
arr = []
result = []
res = [0,0,0,0,0]


for i in range(len(table)):
    arr.append(list(reversed(table[i].split())))

for i in range(len(arr)):
    for j in range(len(arr)):
        for x, y in zip(language,preference):
            if arr[i][j] == x:
                #print(i,j+1,x,y)
                score.append((i,y*(j+1)))
                res[i] += y*(j+1)
#print(score)

"""for x in range(len(score)):
    for y in range(len(table)):
        if score[x][0] == y:
            res[y] += score[x][1]"""
print(res)

maxidx = res.index(max(res))
print(arr[maxidx][-1])

for i in range(len(res)):
    if max(res) == res[i]:
        print(i)
        result.append(arr[i][-1])
print(sorted(result)[0])
