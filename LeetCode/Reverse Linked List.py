class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        """
        def reverse(node:ListNode, prev : ListNode = None):
            if not node:
                return prev
            next,node.next = node.next,prev
            return reverse(next,node)
        
        return reverse(head)""" 
        
        
        node , prev = head , None
        
        while node:
            next,node.next = node.next , prev
            prev, node = node ,next
        return prev
      
      # 재귀 - 40ms , 반복 - 32ms
