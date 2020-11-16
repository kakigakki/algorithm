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
    let right = arr.length - 1
    left = 0

    while (arr[right] < arr[right - 1]) {
        right--
    }

    if (right === 0) return false

    while (arr[left] < arr[left + 1]) {
        left++
    }
    if (left !== right || left === arr.length - 1) {
        return false
    }
    return true

};
// @lc code=end