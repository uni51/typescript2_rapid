// a. 列挙型を定義
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMAIL"] = 1] = "FEMAIL";
    Sex[Sex["UNKNOWN"] = 2] = "UNKNOWN";
})(Sex || (Sex = {}));
var m = Sex.MALE;
console.log(m); // 結果：0
console.log(Sex[m]); // 結果：MALE
