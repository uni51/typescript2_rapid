{
    // b. figureインターフェースを実装したTriangleクラスを準備
    var Triangle = /** @class */ (function () {
        function Triangle(width, height) {
            this.width = width;
            this.height = height;
        }
        // get Areaメソッドを実装
        Triangle.prototype.getArea = function () {
            return this.width * this.height / 2;
        };
        return Triangle;
    }());
    var t = new Triangle(10, 5);
    console.log(t.getArea()); // 結果：25
}
