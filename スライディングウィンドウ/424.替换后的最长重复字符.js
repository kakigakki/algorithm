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
    const wordCount = new Array(26).fill(0)
    const n = s.length
    const Acode = "A".charCodeAt()
    let left = 0,
        right = 0,
        max = 0
    while (right < n) {
        const rightCount = s[right].charCodeAt() - Acode
        max = Math.max(max, ++wordCount[rightCount])
        if (right - left + 1 > max + k) {
            const leftCount = s[left].charCodeAt() - Acode
            wordCount[leftCount]--
                left++
        }
        right++
    }
    return right - left
};
// @lc code=end