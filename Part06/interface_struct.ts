// getAreaメソッドを定義したFigureインターフェース
interface Figure {
  getArea(): number;
}

// a. getAreaメソッドを持つが、Figureインターフェースを明示的に実装しない
class Triangle {
  constructor(private width: number, protected height: number) {}
  // getAreaメソッドを実装
  getArea(): number {
    return this.width * this.height / 2;
  }
}

// b. Figure型の変数にTriangleオブジェクトを代入
let t: Figure = new Triangle(10, 5);
console.log(t.getArea());