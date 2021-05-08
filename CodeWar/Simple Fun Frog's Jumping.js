function frogsJumping(stones) {
    const map = Object.create(null)
    const len = stones.length
    map[0] = "0"
    for (let i = 1; i < len; i++) {
        const stone = stones[i]
        map[stone] = []
        if (map[stone - 1]) {
            map[stone].push(BigInt(map[stone - 1] + "1"))
        }
        if (map[stone - 2]) {
            map[stone].push(BigInt(map[stone - 2] + "2"))
        }
        map[stone] = map[stone].reduce((prev, cur) => prev < cur ? prev : cur) + ""
        delete map[stones[i - 2]]
    }

    return map[stones[len - 1]]
}

console.log(frogsJumping([0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14]));