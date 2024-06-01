//baitap1

let namsinh = +prompt("Bạn sinh năm bao nhiêu");
let tuoi = 2024 - namsinh;
if (namsinh >= 0) {
    console.log("số tuổi", tuoi)
}
else {
    console.log("giá trị không hợp lệ")
}

//baitap2

let number = +prompt("Hãy nhập 1 số bất kỳ");
if (number % 2 == 0) {
    console.log("số chẵn", number)
} else if (number % 2 == 1) {
    console.log("số lẻ", number)
} else {
    console.log("không hợp lệ")
}

//baitap3
let thu = +prompt("Hãy nhập vào 1 số");
switch (thu) {
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("thursday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("saturday")
        break;
    case 8:
        console.log("sunday")
        break;
    default:
        console.log("không hợp lệ")
}

//baitap4

let so = +prompt("Hãy nhập 1 số bất kỳ");
if (so < 0) {
    console.log("số âm", so)
} else {
    console.log("số dương", so)
}

//baitap5
let songuyenduong = +prompt("Hãy nhập 1 số nguyên dương bất kỳ")
for (let i = 1; i <= songuyenduong; i++) {
    console.log("i", i)
}

//baitap6
var i = 1
let n = +prompt("Hãy nhập 1 số nguyên dương")
for (let i = n - 1; i >= 1; i--) n *= i;
console.log("n!=", n *= i)

//baitap7

var b = 1
for (let b = 1; b <= 100; b++) {
    console.log(b)
    if (b % 3 == 0) {
        console.log("Fizz")
    } if (b % 5 == 0) {
        console.log("Buzz")
    } if (b % 3 == 0 & b % 5 == 0) {
        console.log("FizzBuzz")
    }
}

//baitap8

let x = +prompt("Nhập số nguyên dương a")
let y = +prompt("Nhập số nguyên dương b")
for (let z = 1; z <= x; z++) {
    if (z % y == 0) {
        console.log(z)
    }
}



