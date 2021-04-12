# 파이썬 다운 방식
class Solution(object):
    def invertTree(self, root):
        if root:
            root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
            return root
        return None
# 반복 구조로 BFS
class Solution(object):
    def invertTree(self, root):
        queue = collections.deque([root])
        
        while queue:
            node = queue.popleft()
            
            if node:
                node.left , node.right = node.right,node.left
                
                queue.append(node.left)
                queue.append(node.right)
        return root
# 반복 구조로 DFS
class Solution(object):
    def invertTree(self, root):
        stack = collections.deque([root])
        
        while stack:
            node = stack.pop()
            
            if node:
                node.left , node.right = node.right, node.left
                
                stack.append(node.left)
                stack.append(node.right)
        return root
