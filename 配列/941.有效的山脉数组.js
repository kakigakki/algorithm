/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let i = 0
    let j = arr.length - 1
    while (arr[i + 1] > arr[i]) {
        i++
    }
    if (i === j || i === 0) {
        return false
    }
    while (arr[j] < arr[j - 1]) {
        j--
    }
    if (i !== j || j === arr.length - 1) {
        return false
    }
    return true
};
// @lc code=end