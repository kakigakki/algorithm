/*
 * @lc app=leetcode.cn id=869 lang=javascript
 *
 * [869] 重新排序得到 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const set = new Set();
    //算出1-1e9之间所有2的幂的数每个数字出现的次数
    const countNums = (num) => {
        const cnt = new Array(10).fill(0);
        while (num) {
            cnt[num % 10]++;
            num = Math.floor(num / 10)
        }
        return cnt.join()
    }
    for (let i = 1; i <= 1e9; i <<= 1) {
        set.add(countNums(i))
    }

    return set.has(countNums(n))
};
// @lc code=end