function test1(input) {
    let res = input.match(/([A-Z]|\d)\w{0,}/g)
    console.log(new Set(res));
}


let input = "M3 M is a company which provides medical-related services through the use of the Internet since 2000. M3 stands for Medicine, Media and Metamorphosis."
test1(input)