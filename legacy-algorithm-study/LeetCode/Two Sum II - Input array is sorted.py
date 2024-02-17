# 투 포인터 - 64ms
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        i,j = 0,len(numbers)-1
        
        while not i == j:
            if numbers[i] + numbers[j] < target:
                i += 1
            elif numbers[i] + numbers[j] > target:
                j -= 1
            else:
                return i+1,j+1
           
# 이진 검색 - 92ms
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        for k,v in enumerate(numbers):
            left,right = k+1,len(numbers)-1
            expected = target - v
            
            while left <= right:
                mid = left + (right - left)//2
                
                if numbers[mid] < expected:
                    left = mid + 1
                elif numbers[mid] > expected:
                    right = mid - 1
                else:
                    return k + 1, mid + 1
# bisect 모듈 활용 - 60ms
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        for k,v in enumerate(numbers):
            expected = target - v
            i = bisect.bisect_left(numbers,expected,k+1)
            if i <len(numbers) and numbers[i] == expected:
                return k+1,i+1
