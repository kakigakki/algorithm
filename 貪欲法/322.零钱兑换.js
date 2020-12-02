/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//dfs+贪心
var coinChange = function (coins, amount) {
  if (!amount) return 0;
  let ans = Infinity;
  //从大到小排列
  coins.sort((a, b) => b - a);
  let helper = (amount, index, count) => {
    //如果amount为0证明找到一组
    if (!amount) {
      ans = Math.min(ans, count);
      return;
    }
    //如果Index超出了，就不用继续找了
    if (index === coins.length) return;
    for (
      let i = Math.floor(amount / coins[index]);
      //如果i+count大于等于当前最优解的话，就不用继续找了，因为接下来肯定越来越大
      i >= 0 && i + count < ans;
      i--
    ) {
      helper(amount - i * coins[index], index + 1, count + i);
    }
  };
  helper(amount, 0, 0);
  return ans === Infinity ? -1 : ans;
};
// @lc code=end
