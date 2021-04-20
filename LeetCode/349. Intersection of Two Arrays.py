class Solution: # 브루트 포스로 전체 탐색
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result : Set = set()
        for a in nums1:
            for b in nums2:
                if a == b:
                    result.add(a)
        return result
      
class Solution: # 이진 검색으로 일치 여부 판별
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result : Set = set()
        nums2.sort()
        
        for a in nums1:
            index = bisect.bisect_left(nums2,a)
            if len(nums2) > 0 and len(nums2) > index and a == nums2[index]:
                result.add(a)
        return result
    
class Solution: # 투 포인터 기법
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result : Set = set()
        nums1.sort()
        nums2.sort()
        
        i=j=0
        #투 포인터 우측으로 이동하며 일치 여부 판별
        
        while i < len(nums1) and j <len(nums2):
            if nums1[i] > nums2[j]:
                j += 1
            elif nums1[i] < nums2[j]:
                i += 1
            else:
                result.add(nums1[i])
                i += 1
                j += 1
        return result
        
