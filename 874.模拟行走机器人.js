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
var robotSim = function (commands, obstacles) {
  let degree = 90;
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
      (degree -= 90) < 0 ? 360 - degress : degree;
      continue;
    } else if (commands[i] === -1) {
      (degree += 90) === 360 ? 0 : degree;
      continue;
    } else {
      const [x, y] = map[degree];
      let move = commands[i];
      for (const obs of obstacles) {
        const [x, y] = obs;
      }
      while (move--) {
        robot[0] += x * move;
        robot[1] += y * move;
      }
    }
  }
};
// @lc code=end
