var MyClass = /** @class */ (function () {
    function MyClass() {
        // プライベートフィールドを定義
        this.data = 10;
    }
    return MyClass;
}());
var c = new MyClass();
// console.log(c.data);  // 結果：エラー
console.log(c['data']); // 結果：10  
