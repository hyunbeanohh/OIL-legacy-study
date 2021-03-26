class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        """cur = head
        
        while cur and cur.next:
            cur.val , cur.next.val = cur.next.val , cur.val
            
            cur = cur.next.next
            
        return head"""
        
        if head and head.next:
            p = head.next
            head.next = self.swapPairs(p.next)
            p.next = head
            return p
        return head
