/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const MaxVal = Math.max(...arr1)
    let countArr = new Array(MaxVal + 1).fill(0)
    let res = []
    for (const item of arr1) {
        countArr[item]++
    }
    for (const item of arr2) {
        while (countArr[item]) {
            res.push(item)
            countArr[item]--
        }
    }
    for (let i = 1; i <= MaxVal; i++) {
        while (countArr[i]) {
            res.push(i)
            countArr[i]--
        }
    }
    return res
};
// @lc code=end