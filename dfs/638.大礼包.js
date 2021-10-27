/*
 * @lc app=leetcode.cn id=638 lang=javascript
 *
 * [638] 大礼包
 */

// @lc code=start
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
//回溯dfs
var shoppingOffers = function(price, special, needs) {

    let res = Infinity
    const dfs = (needs, cost) => {
            //计算不用礼包时需要多少钱
            const noSpecialCost = needs.reduce((cost, need, index) =>
                    cost + need * price[index], 0
                )
                //目前购买方案的总价
            const currentTotal = noSpecialCost + cost
            res = Math.min(res, currentTotal)
            if (noSpecialCost === 0) return;
            for (const pack of special) {
                //如果礼包中的对应物品的数量大于该物品的所需数量，那么就不用考虑了
                if (needs.every((_, index) => needs[index] >= pack[index])) {
                    //计算使用当前礼包后，还需要多少物品
                    needs.forEach((_, index) => needs[index] -= pack[index])
                    dfs(needs, cost + pack[needs.length])
                    needs.forEach((_, index) => needs[index] += pack[index])
                }
            }
        }
        //还需要购买得东西和目前所花的钱
    dfs(needs, 0)
    return res
};
// @lc code=end