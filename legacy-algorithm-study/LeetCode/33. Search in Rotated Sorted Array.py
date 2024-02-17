class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if not nums:
            return -1
        
        left,right = 0 , len(nums)-1
        
        while left < right :
            mid = left + (right - left) // 2 # 자료형을 넘지 않을만큼 계산
            
            if nums[mid] > nums[right] :
                left = mid + 1
            else:
                right = mid
        pivot = left
        
        # 피벗 기준 이진 탐색
        left,right = 0 , len(nums) -1
        while left <= right :
            mid = left + (right - left) //2
            mid_pivot = (mid + pivot) % len(nums)
            
            if nums[mid_pivot] < target :
                left = mid + 1
            elif nums[mid_pivot] > target:
                right = mid - 1
            else:
                return mid_pivot
        return -1
