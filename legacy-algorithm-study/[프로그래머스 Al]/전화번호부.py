def solution(phone_book):
    answer = True
    phone_book.sort() #문자 정렬
    
    for i in range(len(phone_book)-1): #
        if phone_book[i] in phone_book[i+1]: #정렬 후 앞,뒤 문자를 비교하면 접두어가 존재하는지 알 수 있음.
            return False
    return True
    
 def solution(phone_book):
    phone_book.sort()
    for p1, p2 in zip(phone_book, phone_book[1:]): #zip 으로 묶은 후
        if p2.startswith(p1): #startswith를 사용하여 (내가 찾고자 하는 문자가 다음 문자열의 시작인지 알려주는 함수이다) 해결.
            return False
    return True
