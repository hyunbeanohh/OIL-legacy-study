class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        words = [word for word in re.sub(r'[^\w]',' ',paragraph) # 정규식 적용 ^\w , ' ' -> 모든 문자가 아닌 것을 공백으로 치환
                .lower().split()
                        if word not in banned]
        counter = collections.Counter(words)
        return counter.most_common(1)[0][0]
