x,y = map(int,input().split())
days = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
months = [31,28,31,30,31,30,31,31,30,31,30,31]
total_days = 0
for i in range(x-1):
  total_days += months[i]
total_days = (total_days+ y)% 7
print(days[total_days])
