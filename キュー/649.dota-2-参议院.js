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
var predictPartyVictory = function(senate) {
    const radiant = []
    const dire = []
    for (let i = 0; i < senate.length; i++) {
        senate[i] === "D" ? dire.push(i) : radiant.push(i)
    }

    while (radiant.length && dire.length) {
        const rPre = radiant.shift()
        const dPre = dire.shift()
        if (rPre < dPre) {
            radiant.push(senate.length + rPre)
        } else {
            dire.push(senate.length + dPre)
        }
    }
    return radiant.length ? "Radiant" : "Dire"
};
// @lc code=end