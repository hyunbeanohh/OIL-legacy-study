class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        outs = []
        p = 1
        for i in range(0,len(nums)):
            outs.append(p)
            p = p *nums[i]
        
        p = 1
        for i in range(len(nums)-1,-1,-1):
            outs[i] = outs[i] * p
            p = p * nums[i]
        return outs
