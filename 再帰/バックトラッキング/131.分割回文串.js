/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */

/* 
定义 dp 子问题：dp[i][j]：从 i 到 j 的子串是否回文。

dp[i][j]为真，罗列出所有的情况：
i == j时，子串只有一个字符，肯定回文
j-i == 1时，子串由两个字符组成，字符必须相同s[i] == s[j]
j-i > 1时，子串由两个以上字符组成，s[i] == s[j]，且dp[i+1][j-1]=true即除去首尾字符的剩余子串也是回文子串。
*/
var partition = function(s) {
    const res = [],
        path = [],
        n = s.length,
        dp = new Array(n).fill(0).map(() => new Array(n).fill(true))

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = (s[i] === s[j]) && dp[i + 1][j - 1]
        }
    }
    const helper = (i) => {
        if (i === n) {
            res.push(path.slice())
            return
        }
        for (let j = i; j < n; j++) {
            if (dp[i][j]) {
                path.push(s.slice(i, j + 1))
                helper(j + 1)
                path.pop()
            }
        }
    }
    helper(0)
    return res

};

// @lc code=end