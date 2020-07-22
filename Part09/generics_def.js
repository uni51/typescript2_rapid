// a. ジェネリック対応のMyGenericクラス
var MyGeneric = /** @class */ (function () {
    function MyGeneric() {
    }
    // T型の値を返すgetValueメソッド
    MyGeneric.prototype.getValue = function () {
        return this.value;
    };
    return MyGeneric;
}());
// b. MyGenericクラスにstring型を割り当て
var g = new MyGeneric();
// c. valueプロパティに文字列型の値を代入
g.value = "Hoge";
console.log(g.getValue()); // 結果：Hoge
