class Solution(object):
    def letterCombinations(self, digits):
        key = {
            "2":"abc" , "3":"def", "4":"ghi", "5":"jkl" , "6" : "mno" , "7" :"pqrs", "8" :"tuv" ,"9": "wxyz"
        }
        path = ""
        result = []
        
        
        def dfs(index,path):
            if len(path) == len(digits):
                result.append(path)
                return
            for i in range(index, len(digits)):
                for j in key[digits[i]]:
                    dfs(i+1,path+j) 
        if not digits:
            return []
        
        dfs(0,"")
        return result
