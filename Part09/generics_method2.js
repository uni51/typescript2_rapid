// a. 引数obj1／obj2を結合した結果を返すmerge関数
function merge(obj1, obj2) {
    var result = {};
    // b. obj1のメンバーをresultにコピー
    for (var key in obj1) {
        result[key] = obj1[key];
    }
    // c. obj2のメンバーをresultにコピー
    for (var key in obj2) {
        result[key] = obj2[key];
    }
    return result;
}
var book = {
    title: "JavaScript本格入門",
    price: 2980,
    toString: function () {
        return this.title + " " + this.price;
    }
};
var logger = {
    debug: function () {
        console.log(this.toString());
    }
};
// d. book／loggerオブジェクトをマージ
var m = merge(book, logger);
console.log(m);
