var _data;
var MyClass = /** @class */ (function () {
    function MyClass() {
        // プライベートフィールドを定義
        _data.set(this, 10);
    }
    return MyClass;
}());
_data = new WeakMap();
var c = new MyClass();
// console.log(c.#data);  // 結果：エラー
console.log(c['#data']); // 結果：undefined
