var maxProfit = function(prices) {
    let res = 0
    let set = new Set()
    for (let i = 1; i <= 1234567890; i++) {
        if (1234567890 % i === 0) {
            if (i <= 10000000)
                if (set.has(i)) continue
                else {
                    res += i
                    set.add(i)
                }

        }
    }
    return res
};

var maxProfit2 = function(prices) {
    let res = 0
    for (let i = 1; i <= 64; i++) {
        res += Math.pow(i, 4)
    }
    return res
};

var maxProfit3 = function(prices) {
    let res = 0
    for (let i = 0; i <= 33333; i++) {
        if (i % 3 === 0 || (i + "").indexOf(3) !== -1) {
            res += i
        }

    }
    return res
};

var maxProfit4 = function(prices) {
    let res = 0
    let i = 1
    while (res <= 9) {
        res += 1 / i
        i++
    }
    return --i
};

var maxProfit5 = function() {
    const set = new Set()
    let nums = new Array(30).fill(205).concat(new Array(40).fill(82)).concat(new Array(40).fill(30))
    const helper = (path, index) => {
        if (index === nums.length) {
            let total = 0
            for (let i = 0; i < path.length; i++) {
                total += path[i]
            }
            set.add(total)
            return
        }

        helper(path, index + 1)
        path.push(nums[index])
        helper(path, index + 1)
        path.pop()
    }
    helper([], 0)
    return set
};


console.log(maxProfit5());