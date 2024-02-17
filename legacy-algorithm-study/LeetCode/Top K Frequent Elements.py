class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        """freqs = collections.Counter(nums)
        freqheap = []
        
        for f in freqs:
            heapq.heappush(freqheap,(-freqs[f],f))
        topk = list()
        
        for _ in range(k):
            topk.append(heapq.heappop(freqheap)[1])
        return topk"""
        return list(zip(*collections.Counter(nums).most_common(k)))[0]
