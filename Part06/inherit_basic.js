var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // コンストラクター（name／ageプロパティを初期化）
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        return this.name + "\u306F" + this.age + "\u6B73\u3067\u3059\u3002";
    };
    return Person;
}());
// Personクラスを継承したBusinessPersonクラスを定義
var BusinessPerson = /** @class */ (function (_super) {
    __extends(BusinessPerson, _super);
    function BusinessPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // a. 派生クラスの独自のメソッドを定義
    BusinessPerson.prototype.work = function () {
        return this.name + "\u306F\u30C6\u30AD\u30D1\u30AD\u50CD\u304D\u307E\u3059\u3002";
    };
    return BusinessPerson;
}(Person));
var p = new BusinessPerson('理央', 30);
console.log(p.show()); // 結果：理央は30歳です。
console.log(p.work()); // 結果：理央はテキパキ働きます。
