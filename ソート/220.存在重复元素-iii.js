/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
//按t+1的距离进行桶排序.如果是相同一个桶的话,证明两数之差肯定小于t
//然后当i>=k的时候,删除i-k的桶,保证两数的下标不超过k
var containsNearbyAlmostDuplicate = function(nums, k, t) {
        //[6,10,19,30]
        //t=5
        const map = Object.create(null)
        const diff = t + 1
        const getId = (num) => {
            return Math.floor(num / diff)
        }
        let j = 0
        while (j < nums.length) {
            const num = nums[j]
            const id = getId(num)

            if (map[id] !== undefined) {
                return true
            }
            if (map[id - 1] !== undefined && Math.abs(num - map[id - 1]) <= t) {
                return true
            }
            if (map[id + 1] !== undefined && Math.abs(num - map[id + 1]) <= t) {
                return true
            }
            map[id] = num
            if (j >= k) {
                map[getId(nums[j - k])] = undefined
            }
            j++
        };
        return false
    }
    // @lc code=end