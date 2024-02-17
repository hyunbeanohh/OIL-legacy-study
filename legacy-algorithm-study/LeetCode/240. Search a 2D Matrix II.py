class Solution: # 첫 행의 맨 뒤부터 탐색
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix :
            return False
        
        row = 0
        col = len(matrix[0]) -1
        
        while row <= len(matrix) -1 and col >= 0:
            if target == matrix[row][col]:
                return True
            elif target < matrix[row][col]:
                col -= 1
            elif target > matrix[row][col]:
                row += 1
        return False
      
class Solution: # 행렬을 탐색하면서 트루가 하나라도 있다면 트루 반환 , all -> 모두가 참일때 참을 반환
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        return any(target in row for row in matrix)
