class Solution(object):
    def findKthLargest(self, nums, k):
        ###
        heap = list()
        for n in nums:
            heapq.heappush(heap,-n)
        
        for _ in range(k-1):
            heapq.heappop(heap)
        
        return -heapq.heappop(heap)
        ###
        
        heap = heapify(nums)
       
        for _ in range(len(nums)-k):
            heapq.heappop(nums)
        return heapq.heappop(nums)
        ###
        
        
        return heapq.nlargest(k,nums)[-1]
        ###
        return sorted(nums,reverse=True)[k-1]
