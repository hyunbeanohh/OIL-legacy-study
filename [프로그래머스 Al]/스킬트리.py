def solution(skill, skill_trees):
    answer = 0
    
    for sk in skill_trees:
        skill_list = list(skill)
        
        for s in sk:
            if s in skill:
                if s != skill_list.pop(0):
                    break
        else:
             answer +=1 
    return answer
    
    
