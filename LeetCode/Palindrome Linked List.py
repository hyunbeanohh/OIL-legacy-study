class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        """
        q: List = []
        
        if not head:
            return True
        
        node = head
        
        while node is not None:
            q.append(node.val)
            node = node.next
        
        while len(q) > 1:
            if q.pop(0) != q.pop():
                return False
        return True"""
     
        q: Deque = collections.deque()
        
        if not head:
            return True
        
        node = head
        
        while node is not None:
            q.append(node.val)
            node = node.next
        
        while len(q) > 1:
            if q.popleft() != q.pop():
                return False
            
        return True
        # 연결 리스트의 풀이 -> 1300ms
        # 데큐의 풀이 -> 800ms 
