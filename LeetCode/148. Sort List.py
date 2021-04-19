class Solution:
    
    def mergeTwoLists(self, l1:ListNode, l2:ListNode) -> ListNode:
        if l1 and l2 :
            if l1.val > l2.val:
                l1,l2 = l2,l1
            l1.next = self.mergeTwoLists(l1.next,l2)
        return l1 or l2
    
    def sortList(self, head: ListNode) -> ListNode:
        if not (head and head.next):
            return head
        
        #런너 기법
        half ,slow, fast = None,head,head
        while fast and fast.next:
            half, slow, fast = slow, slow.next, fast.next.next
        half.next = None
        
        #분할 재귀 호출
        l1 = self.sortList(head)
        l2 = self.sortList(slow)
        
        return self.mergeTwoLists(l1,l2)
        
class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        # 연결리스트 -> 파이썬
        p = head
        lst : List = []
        while p:
            lst.append(p.val)
            p = p.next
        
        lst.sort()
        # 파이썬 -> 연결리스트
        p = head
        for i in range(len(lst)):
            p.val = lst[i]
            p = p.next
        return head
