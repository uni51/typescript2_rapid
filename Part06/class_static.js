var Figure = /** @class */ (function () {
    function Figure() {
    }
    // 静的メソッドcircle（円の面積）
    Figure.circle = function (radius) {
        return radius * radius * this.PI;
    };
    // 静的プロパティPI(円周率)
    Figure.PI = 3.14159;
    return Figure;
}());
console.log(Figure.PI);
console.log(Figure.circle(5));
