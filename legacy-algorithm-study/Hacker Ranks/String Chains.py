from collections import defaultdict
def longestChain(words):
    words.sort(key=len)
    dp = defaultdict(int)
    for w in words:
        for i in range(len(w)):
            dp[w] = max(dp[w],dp[w[:i]+w[i+1:]]+1)
    return max(dp.values())

words = ['a','and','an','bear']
