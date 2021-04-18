class TrieNode:
    def __init__(self):
        self.word = False
        self.children = collections.defaultdict(TrieNode)
        

class Trie(object):
    def __init__(self):
        self.root = TrieNode()
        

    def insert(self, word): # 단어 삽입
        node = self.root
        for char in word:
            node = node.children[char]
        node.word = True
        

    def search(self, word): # 단어 존재 여부 판별
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.word
        

    def startsWith(self, prefix): # 문자열로 시작 단어 존재 여부 판별
        node = self.root
        for pre in prefix:
            if pre not in node.children:
                return False
            node = node.children[pre]
        return True
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
