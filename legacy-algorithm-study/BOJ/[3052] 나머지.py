arr= []
for i in range(10):
   arr.append(int(input()))
   arr[i]=arr[i]%42
print(len(list(set(arr))))

