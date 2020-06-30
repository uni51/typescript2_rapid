{
  class Person {
    // b. protectedメンバーを準備
    protected name: string;
    protected age: number;
    // コンストラクター（name／ageプロパティを初期化）
    constructor(name:string, age:number) {
      this.name = name;
      this.age = age;
    }
    show(): string {
      return `${this.name}は${this.age}歳です。`
    }
  }

  // Personクラスを継承したBusinessPersonクラスを定義
  class BusinessPerson extends Person {
    // a. 派生クラスの独自のメソッドを定義
    work(): string {
      return `${this.name}はテキパキ働きます。`    
    }
  }

  let p = new BusinessPerson('理央', 30);
  console.log(p.show());  // 結果：理央は30歳です。
  console.log(p.work());  // 結果：理央はテキパキ働きます。
}