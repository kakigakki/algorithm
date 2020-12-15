/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */

//队列实现
var predictPartyVictory = function(senate) {
    //将不同阵营的参议员按位置顺序排列分别装进队列中，再一轮一轮比较
    const radiant = []
    const dire = []
    const n = senate.length
    for (let i = 0; i < senate.length; i++) {
        senate[i] === "D" ? dire.push(i) : radiant.push(i)
    }

    while (radiant.length && dire.length) {
        if (radiant[0] < dire[0]) {
            radiant.push(radiant[0] + n)
        } else {
            dire.push(dire[0] + n)
        }
        radiant.shift()
        dire.shift()
    }
    return radiant.length ? "Radiant" : "Dire"
};
// @lc code=end