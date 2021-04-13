# 브루트포스로 탐색
class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        if not root:
            return 0
        
        return (root.val if low <= root.val <= high else 0) + self.rangeSumBST(root.left,low,high) + self.rangeSumBST(root.right,low,high)

# DFS 가지치기로 필요한 노드 탐색
class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        def dfs(node:TreeNode):
            if not node:
                return 0
            
            if node.val < low:
                return dfs(node.right)
            elif node.val > high:
                return dfs(node.left)
            return node.val + dfs(node.left) + dfs(node.right)
        return dfs(root)
# 반복 구조 DFS로 필요한 노드 탐색

class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        stack,sum = [root], 0
        # 스택 이용 필요한 노드 DFS 반복
        
        while stack:
            node= stack.pop()
            
            if node:
                if node.val > low:
                    stack.append(node.left)
                if node.val < high:
                    stack.append(node.right)
                if low <= node.val <= high:
                    sum += node.val
        return sum
# 반복 구조 BFS로 필요한 노드 탐색
class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        queue,sum = [root], 0
        
        while queue:
            node = queue.pop(0)
            if node:
                if node.val > low :
                    queue.append(node.left)
                if node.val < high:
                    queue.append(node.right)
                if low <= node.val <= high:
                    sum += node.val
           
        return sum
        
