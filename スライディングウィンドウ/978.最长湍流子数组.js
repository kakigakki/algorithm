/*
 * @lc app=leetcode.cn id=978 lang=javascript
 *
 * [978] 最长湍流子数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let left = 0,
        right = 0,
        max = 0,
        mark = null
    if (arr.length === 1) return 1
    while (right < arr.length) {
        max = Math.max(max, right - left + 1)
        if (arr[right] < arr[right + 1]) {
            if (mark === "<") {
                left = right
            }
            mark = "<"
        } else if (arr[right] > arr[right + 1]) {
            if (mark === ">") {
                left = right
            }
            mark = ">"
        } else {
            left = right + 1
            mark = null
        }
        right++
    }
    return max
};
// @lc code=end