// 一般的な3桁区切り
let num = 1_000_000;
// 15900￠＝159＄を表現
let num2 = 159_00;
// （意味はないが）桁の異なる区切りも可
let num3 = 123_45_6_7;
// n進数リテラルでも利用できる
let num4 = 0b1000_0101_0100;

console.log(num); // 100000
console.log(num2); // 15900
console.log(num3); // 1234567
console.log(num4); // 2132