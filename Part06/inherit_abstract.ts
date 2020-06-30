// b. 抽象クラスを宣言
abstract class Figure {
  // コンストラクター（width／heightプロパティを初期化）
  constructor(protected width: number, protected height: number) {}
  // a. 抽象メソッドとして、getAreaを準備
  abstract getArea(): number;
}

// b. figureクラスを継承し、getAreaメソッドをオーバーライド
class Triangle extends Figure {
  // 抽象メソッドをオーバーライド
  getArea(): number {
    return this.width * this.height / 2;
  }
}

let t = new Triangle(10, 5);
console.log(t.getArea()); // 結果：25