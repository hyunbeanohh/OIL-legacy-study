class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i] + nums[j] == target:
                    return [i,j] 
         # 제일 느림 584 ms
                
        for i,n in enumerate(nums):
            complements = target - n
            
            if complements in nums[i+1:]:
                return nums.index(n),nums[i+1:].index(complements) + (i+1) # 44ms
        
        nums_map = {}
        for i,num in enumerate(nums):
            nums_map[num] = i
        
        for i,num in enumerate(nums):
            if target - num in nums_map and i != nums_map[target-num]:
                return nums.index(num) , nums_map[target-num] # 48 ms
        
        left , right = 0, len(nums)-1
        while not left == right :
            if nums[left] + nums[right] < target:
                left += 1
            elif nums[left] + nums[right] > target:
                right -= 1
            else:
                return left,right
            # 입력값이 정렬된 상태가 아니기 때문에 풀이 불가.
            # sort를 한다면 인덱스가 엉망이 됨. 값을 찾는 문제라면 풀이 가능
