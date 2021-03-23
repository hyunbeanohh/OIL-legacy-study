class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram = defaultdict(list)
        for word in strs:
            anagram[''.join(sorted(word))].append(word)
        return anagram.values()
