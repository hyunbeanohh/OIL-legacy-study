class Solution(object):
    def combinationSum(self, candidates, target):
        result = []
        
        def dfs(csum,index,path):
            if csum < 0 :
                return
            if csum == 0:
                result.append(path)
                return
            
            for i in range(index,len(candidates)):
                dfs(csum - candidates[i],i,path+[candidates[i]])
                # 조합이 아닌 순열로 풀이하고 싶다면 dfs(csum - candidates[i],0,path+[candidates[i]])
        dfs(target,0,[])
        return result
        
