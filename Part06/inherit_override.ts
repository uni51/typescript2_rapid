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
    protected clazz: string;
    // b. コンストラクターをオーバーライド
    constructor(name: string, age: number, clazz: string) {
      super(name, age);
      this.clazz = clazz;
    }
    // a. showメソッドをオーバーライド
    show(): string {
      return super.show() + `${this.clazz}です。`;
    }    
  }

  let p = new BusinessPerson('理央', 30, '主任');
  console.log(p.show());  // 結果：理央は30歳です。
}