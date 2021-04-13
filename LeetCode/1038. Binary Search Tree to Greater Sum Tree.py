class Solution:
    val :int = 0
    def bstToGst(self, root: TreeNode) -> TreeNode:
        # 중위 순위 노드 값 누적
        if root :
            self.bstToGst(root.right)
            self.val += root.val
            root.val = self.val
            self.bstToGst(root.left)
        
        return root
        
