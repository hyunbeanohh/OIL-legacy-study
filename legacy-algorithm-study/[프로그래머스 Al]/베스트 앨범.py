from collections import defaultdict 

genres = ["classic", "pop", "classic", "classic", "pop"]
plays = [500, 600, 150, 800, 2500]
answer = []

genre_plays = defaultdict(int) # 키값이 존재 하지 않는 경우 기본형이 int로 추가되는 defaultdict 선언
genre_songs = defaultdict(lambda : []) # 키 값이 존재하지 않는 경우 기본형이 빈 배열인 defaultdict 선언

i = 0 # 고유 번호는 0부터 시작
for g,p in zip(genres,plays): #zip으로 묶어 순환
  genre_plays[g] += p #종류에 맞게 플레이 횟수를 누적
  genre_songs[g].append((i,p))#고유 번호와 플레이 횟수 추가
  i += 1#고유번호 증가


sorted_genre = sorted(genre_plays.items(),key = lambda x: x[1],reverse=True)
#items 함수를 이용하여 key와 value를 가져와 플레이 횟수를 기준으로 내림차순 정렬

for g in sorted_genre:
  sorted_g = sorted(genre_songs[g[0]],key=lambda x: x[1],reverse=True)
  # 플레이 횟수에 따라 내림차순 정렬
  answer.append(sorted_g[0][0])
  # 가장 재생수가 많은 장르를 추가 
  if len(sorted_g) > 1: # 종류가 1개를 넘으면 2번째 까지 추가
    answer.append(sorted_g[1][0])

print(answer)
print(genre_songs)
print(genre_plays)
print(sorted_genre)
print(sorted_g)
