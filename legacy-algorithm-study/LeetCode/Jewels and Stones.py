class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        """freqs = {}
        count = 0
        
        for stone in stones:
            if stone not in freqs:
                freqs[stone] = 1
            else:
                freqs[stone] += 1
        
        for jewel in jewels:
            if jewel in jewels:
                count += freqs[jewel]
        return count"""
        
        """freqs = collections.defaultdict(int)
        count = 0
        
        for stone in stones:
            freqs[stone] += 1
        for J in jewels:
            count += freqs[J]
        return count"""
        
        
        """freqs = collections.Counter(stones)
        count = 0
        for stone in jewels:
            count += freqs[stone]
        return count"""
        
        return sum(stone in jewels for stone in stones)
