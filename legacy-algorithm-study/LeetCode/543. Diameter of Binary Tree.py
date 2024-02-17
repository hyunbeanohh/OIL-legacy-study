class Solution:
    longest : int  = 0 
        # 리스트나 딕셔너리 같은 자료형이면 재할당 가능하지만 숫자나 문자인경우
        # 불변 객체이기 때문에 중첩 함수 내에서는  값을  변경할 수  없다. -> 클래스 변수 사용
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        def dfs(node:TreeNode) -> int :
            if not node:
                return  -1
            # 왼쪽 , 오른쪽의 각 리프 노드까지  탐색
            left = dfs(node.left)
            right  = dfs(node.right)
            
            # 가장 긴 경로
            self.longest =  max(self.longest,left+right+2)
            
            # 상태 값
            return max(left,right)+1
        
        dfs(root)
        return self.longest
