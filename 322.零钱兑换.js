var coinChange = function() {
    let count = 0
    for (let a = 1; a <= 8156 * 2; a++) {
        b: for (let b = a; b <= 8156 * 2 / a; b++) {
            let c = Math.sqrt(a * a + b * b)
            if (a + b > c && a + c > b && b + c > a) {
                count++
            } else {
                break b
            }
        }
    }
    console.log(count);
};

coinChange()