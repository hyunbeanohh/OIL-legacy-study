class Solution(object):
    def combine(self, n, k):
        result = []
        
        def dfs(elements,start,k):
            if k == 0:
                result.append(elements[:])
            
            for i in range(start,n+1):
                elements.append(i)
                dfs(elements,i + 1 , k -1)
                elements.pop()
        dfs([],1,k)
        return result    
class Solution(object):
    def combine(self, n, k):
        return list(itertools.combinations(range(1,n+1),k))
        
        
