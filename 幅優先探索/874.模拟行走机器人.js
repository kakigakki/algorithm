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
    let degree = 0;
    let res = 0;
    let robot = [0, 0];
    let map = {
        0: [0, 1],
        90: [1, 0],
        180: [0, -1],
        270: [-1, 0],
    };
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === -1) {
            degree = degree + 90
            if (degree === 360) {
                degree = 0
            }
        } else if (commands[i] === -2) {
            degree = degree - 90
            if (degree === -90) {
                degree = 270
            }
        } else {
            const [x, y] = map[degree]
            let move = commands[i]
            move: while (move--) {
                //判断前方是否有障碍物
                for (const obs of obstacles) {
                    const [obsX, obsY] = obs
                    if (robot[0] + x === obsX && robot[1] + y === obsY) {
                        break move
                    }
                }
                robot[0] += x
                robot[1] += y
                res = Math.max(res, robot[0] ** 2 + robot[1] ** 2)
            }
        }
    }
    return res
};
// @lc code=end