/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const count1 = new Array(26).fill(0)
    const count2 = new Array(26).fill(0)
    const aCode = 'a'.charCodeAt()
    let left = 0,
        right = 0
    const n = s2.length
    for (const char of s1) {
        count1[char.charCodeAt() - aCode]++
    }

    while (right < n) {
        count2[s2[right].charCodeAt() - aCode]++;
        while (left <= right && count2[s2[left].charCodeAt() - aCode] > count1[s2[left].charCodeAt() - aCode]) {
            count2[s2[left].charCodeAt() - aCode]--;
            left++
        }
        if (count1.join(",") === count2.join(",")) return true
        right++
    }
    return false


};
// @lc code=end