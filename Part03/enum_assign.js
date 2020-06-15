// a. 列挙体を定義
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 1] = "MALE";
    Sex[Sex["FEMAIL"] = 2] = "FEMAIL";
    Sex[Sex["UNKNOWN"] = 4] = "UNKNOWN";
})(Sex || (Sex = {}));
// b.MALEにアクセス
var m = Sex.MALE;
console.log(m); // 結果：1
console.log(Sex[m]); // 結果：1
