var MyClass = /** @class */ (function () {
    // コンストラクター（現在値_valueを初期化）
    function MyClass(_value) {
        this._value = _value;
    }
    Object.defineProperty(MyClass.prototype, "value", {
        // 現在地を取得するgetter
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    // 与えられた値valueで加算
    MyClass.prototype.plus = function (value) {
        this._value += value;
        return this;
    };
    // 与えられた値valueで減算
    MyClass.prototype.minus = function (value) {
        this._value -= value;
        return this;
    };
    return MyClass;
}());
// a. 10+10-5の計算
var clazz = new MyClass(10);
console.log(clazz.plus(10).minus(5).value); // 結果：15
