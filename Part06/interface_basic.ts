{
  // a. getAreaメソッドを持ったFigureインターフェースを定義
  interface Figure {
    getArea(): number;
  }

  // b. figureインターフェースを実装したTriangleクラスを準備
  class Triangle implements Figure {
    constructor(private width: number, protected height: number) {}
    // get Areaメソッドを実装
    getArea(): number {
      return this.width * this.height / 2;
    }
  }

  let t = new Triangle(10, 5);
  console.log(t.getArea()); // 結果：25
}