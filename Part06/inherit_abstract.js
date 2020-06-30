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
// b. 抽象クラスを宣言
var Figure = /** @class */ (function () {
    // コンストラクター（width／heightプロパティを初期化）
    function Figure(width, height) {
        this.width = width;
        this.height = height;
    }
    return Figure;
}());
// b. figureクラスを継承し、getAreaメソッドをオーバーライド
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 抽象メソッドをオーバーライド
    Triangle.prototype.getArea = function () {
        return this.width * this.height / 2;
    };
    return Triangle;
}(Figure));
var t = new Triangle(10, 5);
console.log(t.getArea()); // 結果：25
