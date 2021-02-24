# 현재 설치된 구조물이 '가능한' 구조물인지 확인하는 함수
def possible(answer):
  for x,y,stuff, in answer:
    if stuff  == 0: # 설치된 것이 기둥일 때
      # 바닥 '위'  혹은 '보의 한쪽 끝 부분 위 ' 혹은 '다른 기둥 위'라면 정상
      if y == 0 or [x-1,y,1] in answer or [x,y,1] in answer or [x,y-1,0] in answer:
        continue
      return  False # 아니라면 거짓 반환
    elif stuff == 1 : # 설치된 것이  '보'인 경우
      # '한쪽  끝 부분이  기둥  위' 혹은 '양쪽 끝부분이  다른 보와 동시에 연결'이라면 정상
      if [x,y-1,0] in  answer or [x+1,y-1,0] in answer or ([x-1,y,1] in answer and [x+1 , y ,1]) in answer:
        continue
      return False
  return True

def solution(n,build_frame):
  answer  = []  
  for frame in build_frame :  # 작업의 개수는 최대  1000개
    x,y,stuff,operate = frame
    if operate  == 0 : # 삭제하는 경우          
      answer.remove([x,y,stuff])
      if not possible(answer): #가능한 구조물인지 확인
        answer.append([x,y,stuff])  #가능한 구조물이 아니라면 다시 설치

    if operate == 1:  #설치하는 경우
      answer.append([x,y,stuff])
      if not possible(answer):
        answer.remove([x,y,stuff]) #가능한 구조물이 아니라면 다시 삭제
  return sorted(answer)

build_frame = [[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]]

print(solution(5,build_frame))
