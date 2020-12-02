/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
//桶排序
var sortString = function(s) {
    let bucket = new Array(26).fill(0)
    let t = ""
    for (const c of s) {
        bucket[c.charCodeAt() - 97]++
    }
    while (t.length < s.length) {
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i]) {
                t += String.fromCharCode(i + 97)
                bucket[i]--
            }
        }
        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i]) {
                t += String.fromCharCode(i + 97)
                bucket[i]--
            }
        }
    }
    return t
};
// @lc code=end