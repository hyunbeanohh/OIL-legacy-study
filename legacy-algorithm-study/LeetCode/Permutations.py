class Solution(object):
    def permute(self, nums):
        result = []
        prev_ele = []
        
        def dfs(ele):
            if len(ele) == 0:
                result.append(prev_ele[:])
            for e in ele:
                next_ele = ele[:]
                next_ele.remove(e)
                
                prev_ele.append(e)
                dfs(next_ele)
                prev_ele.pop()
        dfs(nums)
        return result
      
class Solution(object):
    def permute(self, nums):
        return list(itertools.permutations(nums))
        
