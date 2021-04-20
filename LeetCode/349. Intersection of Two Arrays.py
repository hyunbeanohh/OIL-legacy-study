class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result : Set = set()
        for a in nums1:
            for b in nums2:
                if a == b:
                    result.add(a)
        return result
      
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result : Set = set()
        nums2.sort()
        
        for a in nums1:
            index = bisect.bisect_left(nums2,a)
            if len(nums2) > 0 and len(nums2) > index and a == nums2[index]:
                result.add(a)
        return result
