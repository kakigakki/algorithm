/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
//max,indexOf,splice的用法
var lastStoneWeight = function(stones) {
    if (stones.length == 1) { // 如果数组长度为 1 直接返回
        return stones[0];
    }
    while (stones.length > 1) { // 数组长度大于 1，循环
        let nowMaxNum = Math.max(...stones) // 获取当前数组最大值
        let maxNumIndex = stones.indexOf(nowMaxNum) // 获取最大值的索引
        stones.splice(maxNumIndex, 1) // 删除最大值
        let secondMaxNum = Math.max(...stones) // 继续获取数组最大值，这时候对于这轮来说是第二大的值
        let secondNumIndex = stones.indexOf(secondMaxNum) // 获取索引
        let reduceValue = nowMaxNum - secondMaxNum // 求差
        if (reduceValue > 0) { // 如果差值大于0，则删除当前最大值，并且插入插值
            stones.splice(secondNumIndex, 1, reduceValue)
        } else { // 否者删除当前最大值
            stones.splice(secondNumIndex, 1)
        }
    }
    return stones.length ? stones[0] : 0
};
// @lc code=end