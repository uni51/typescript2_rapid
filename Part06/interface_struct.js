// a. getAreaメソッドを持つが、Figureインターフェースを明示的に実装しない
var Triangle = /** @class */ (function () {
    function Triangle(width, height) {
        this.width = width;
        this.height = height;
    }
    // getAreaメソッドを実装
    Triangle.prototype.getArea = function () {
        return this.width * this.height / 2;
    };
    return Triangle;
}());
// b. Figure型の変数にTriangleオブジェクトを代入
var t = new Triangle(10, 5);
console.log(t.getArea());
