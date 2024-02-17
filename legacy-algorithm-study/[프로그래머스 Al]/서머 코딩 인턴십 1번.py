def solutions(code,day,data):
  answer = []
  for i in data:
    if i.split(' ')[1].split('=')[1] == code and i.split(' ')[2].split('-')[:8] == day :
      answer.append([int(i.split(' ')[1].split(' ')[8:11]),int(i.split(' ')[0].split('=')[1])])
  answer.sort(key=lambda a: (a[0],a[1]))
  return answer
