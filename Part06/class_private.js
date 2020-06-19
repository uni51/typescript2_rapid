var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data;
var MyClass = /** @class */ (function () {
    function MyClass() {
        // プライベートフィールドを定義
        _data.set(this, 10);
    }
    MyClass.prototype.show = function () {
        console.log("\u5024\u306F" + __classPrivateFieldGet(this, _data) + "\u3067\u3059\u3002");
    };
    return MyClass;
}());
_data = new WeakMap();
var c = new MyClass();
c.show(); // 結果：値は10です。
// プライベートフィールドへのアクセスはエラー
console.log(c.);
