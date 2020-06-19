class MyClass {
  // プライベートフィールドを定義
  #data = 10;
  show(): void {
    console.log(`値は${this.#data}です。`);
  }
}

let c = new MyClass();
c.show(); // 結果：値は10です。
// プライベートフィールドへのアクセスはエラー
console.log(c.#data);