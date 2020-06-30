{
  class Person {
    work(): any {
      throw new Error("Method not implemented.");
    }
    // プロパティ
    name: string;
    age: number;
    // コンストラクター
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    // メソッド
    show(): string {
      return `${this.name}は${this.age}歳です。`;
    }
  }

  let p = new Person('理央', 30);
  console.log(p.show()); // 理央は30歳です
}