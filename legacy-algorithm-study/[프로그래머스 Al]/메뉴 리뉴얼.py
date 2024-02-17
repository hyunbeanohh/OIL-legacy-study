def solutuon(orders, course):
  freq= [{}for i in range(11)]
  #A코스 메뉴 조합 추출
  for order in orders:
    order = ''.join(sorted(order))
    for i in range(1, 1<<len(order)):
      menu = ''
      tmp = i
      for j in range(len(order)):
        if tmp % 2 : menu += order[j]
        tmp //= 2
      if menu in freq[len(menu)] : freq[len(menu)][menu] += 1
      else: freq[len(menu)][menu] = 1
  #B 코스요리 메뉴 계산
  ans = []
  for i in course:
    if not freq[i] : continue
    mxfreq = max(freq[i].values())
    if mxfreq < 2: continue
    for p in freq[i].items():
      if p[1] == mxfreq : ans.append(p[0])
  return sorted(ans)

orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
course =[2,3,4]
print(solutuon(orders,course))
