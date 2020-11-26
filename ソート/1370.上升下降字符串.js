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
    let bucket = new Array(26).fill(0);
    for (const c of s) {
        bucket[c.charCodeAt() - 97]++;
    }
    let t = ""
    while (t.length !== s.length) {
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i]) {
                t += String.fromCharCode(i + 97)
                bucket[i]--
            }

        }
        for (let j = bucket.length - 1; j >= 0; j--) {
            if (bucket[j]) {
                t += String.fromCharCode(j + 97)
                bucket[j]--
            }
        }
    }
    return t
};
// @lc code=end