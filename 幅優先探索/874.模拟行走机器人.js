/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let x = 0
    let y = 0
    let res = 0
    let dire = 0 //0 :上 1：右  2：下  3：左
    const obs = {}
        //数组作为建，会变化为" xx,xx"字符串
    for (let i = 0; i < obstacles.length; i++) {
        obs[obstacles[i]] = true
    }
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === -1) {
            dire = (dire + 1) % 4
        } else if (commands[i] === -2) {
            dire = (dire - 1 + 4) % 4
        } else {
            while (commands[i]--) {
                const prevX = x
                const prevY = y
                dire === 0 && y++
                    dire === 1 && x++
                    dire === 2 && y--
                    dire === 3 && x--
                    if (obs[x + "," + y]) {
                        x = prevX
                        y = prevY
                        break
                    }

            }
        }
        res = Math.max(res, x * x + y * y)
    }
    return res
};
// @lc code=end