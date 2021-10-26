/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    //单调递增栈
    const stack = []
    const map = {}
    const res = []
        //将nums中每个数字对应得下一个最大的数存入map中，如果不存在则存入-1
    nums2.forEach(item => {
        while (stack.length && item > stack[stack.length - 1]) {
            map[stack.pop()] = item
        }
        stack.push(item)
    })
    stack.forEach(item => map[item] = -1)

    //根据map找到结果
    nums1.forEach(item => res.push(map[item]))

    return res
};
// @lc code=end