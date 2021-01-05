function test1() {
    let input = "M3 is a company which provides medical-related services through the use of the Internet since 2000. M3 stands for Medicine, Media and Metamorphosis."
    let res = input.match(/([A-Z]|\d)\w+/g)
    console.log(new Set(res).size);
}

test1()