{
// a. Car型を定義
interface Car {
  type: string; // プロパティシグニチャ
  run(): void;  // メソッドシグニチャ
}

// b. Car型の変数cを宣言
let c: Car = {
  type: 'トラック',
  run() {
    console.log(`${this.type}が走ります。`);
  }
};

c.run();  // 結果：トラックが走ります
}