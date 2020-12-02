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
        if (commands[i] === -2) {
            degree -= 90
            if (degree < 0) {
                degree = 360 + degree
            }
            continue;
        } else if (commands[i] === -1) {
            degree += 90
            if (degree === 360) {
                degree = 0
            }
            continue;
        } else {
            //机器人的方向
            const [x, y] = map[degree];
            //机器人步数
            let move = commands[i];
            move: while (move--) {
                for (const obs of obstacles) {
                    const [obsX, obsY] = obs;
                    if (robot[0] + x === obsX && robot[1] + y === obsY) {
                        break move
                    }
                }
                robot[0] += x;
                robot[1] += y;
                res = Math.max(res, robot[0] * robot[0] + robot[1] * robot[1])
            }
        }
    }
    return res
};
// @lc code=end