/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const n = s.length
    const Acode = "A".charCodeAt()
    let left = 0,
        right = 0,
        max = 0
    const nums = new Array(26).fill(0)
    while (right < n) {
        const rightCount = ++nums[s[right].charCodeAt() - Acode]
        max = Math.max(rightCount, max)
        if (right - left + 1 > max + k) {
            nums[s[left].charCodeAt() - Acode]--
                left++
        }
        right++
    }
    return right - left
};
// @lc code=end