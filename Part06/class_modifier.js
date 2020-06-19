var Person = /** @class */ (function () {
    // コンストラクター（プロパティを初期化）
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // メソッド（publicは付けなくても同じ意味）
    Person.prototype.show = function () {
        // クラス内からはアクセス可能
        return this.name + "\u306F" + this.age + "\u6B73\u3067\u3059\u3002";
    };
    return Person;
}());
var p = new Person('理央', 30);
console.log(p.show()); // 結果：理央は30歳です
console.log(p.name); // 結果：エラー
