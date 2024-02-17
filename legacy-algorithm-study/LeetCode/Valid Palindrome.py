class Solution:
    def isPalindrome(self, s: str) -> bool:
        """strs = []
        for char in s:
            if char.isalnum():
                strs.append(char.lower())
        while len(strs) > 1:
            if strs.pop(0) != strs.pop():
                return False
        return True
        #Runtime = 300ms
        """
        """strs: Deque = collections.deque()
        
        for char in s:
            if char.isalnum():
                strs.append(char.lower())
        while len(strs) > 1:
            if strs.popleft() != strs.pop():
                return False
        return True
        #Runtime = 52ms"""
        
        """s = s.lower()
        s = re.sub('[^a-z0-9]','',s)
        
        return s == s[::-1]
        #Runtime 36ms"""
