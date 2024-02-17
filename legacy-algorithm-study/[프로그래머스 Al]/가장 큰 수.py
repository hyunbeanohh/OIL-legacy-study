def solution(numbers):

    numbers = list(map(str,numbers))
    numbers = sorted(numbers,key = lambda a : a*3, reverse=True)
    numbers = str(int(''.join(numbers)))
    return numbers
    
1.itertools 의 permutations 를 이용해서 푸려고 했으나 튜플 내부 값들을 연결하지 못해서 포기.
2.람다함수를 사용하여 배열의 값을 리스트로 받고 제일 앞 수 만큼 비교해서 join으로 풀려고 함.
3.테스트케이스 1번은 맞았으나 33,30,3, 이러한 수에서 실패함 
4. lambda a : a*3 -> 1000이하의 자연수라서 333333 303030 333 처럼 비교함
5. 끝 자리에 0000 나오는 수들을 int형변환을 통해 제거해주고 str로 다시 형변환 후 성공 -> 시간복잡도를 많이 잡아먹는듯 함
