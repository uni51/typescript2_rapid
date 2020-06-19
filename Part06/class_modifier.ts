class Person {
  // プロパティ
  private name: string;
  private age: number;
  // コンストラクター（プロパティを初期化）
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // メソッド（publicは付けなくても同じ意味）
  public show(): string {
    // クラス内からはアクセス可能
    return `${this.name}は${this.age}歳です。`;
  }
}

let p = new Person('理央', 30);
console.log(p.show()); // 結果：理央は30歳です
console.log(p.name); // 結果：エラー