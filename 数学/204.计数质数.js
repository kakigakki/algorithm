/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0
    const arr = new Array(n)
    for (let i = 2; i < arr.length; i++) {
        if (!arr[i - 1]) {
            arr[i - 1] = true
            count++
            for (let j = i * i; j < arr.length; j += i) {
                arr[j - 1] = true
            }
        }
    }
    return count
};
// @lc code=end