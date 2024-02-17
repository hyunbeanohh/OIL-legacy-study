class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        """for char in sorted(set(s)):
            suffix = s[s.index(char):]
            if set(s) == set(suffix):
                return char+self.removeDuplicateLetters(suffix.replace(char,''))
        return ''"""
        
        counter ,seen,stack = collections.Counter(s),set(),[]
        
        for char in s:
            counter[char] -= 1
            if char in seen:
                continue
            
            while stack and char < stack[-1] and counter[stack[-1]] > 0: 
              # char 가 스택에 쌓여 있는 문자(이전 문자보다 앞선 문자)이고 , 뒤에 다시 붙일 문자가 남아 있다면 (카운터가 0 이상)
              # 쌓아둔 걸 꺼내서 없앤다.
                seen.remove(stack.pop())
            stack.append(char)
            seen.add(char)
        return ''.join(stack)
