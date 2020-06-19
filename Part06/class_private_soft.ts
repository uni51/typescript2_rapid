class MyClass {
  // プライベートフィールドを定義
  private data = 10;
}

let c = new MyClass();
// console.log(c.data);  // 結果：エラー
console.log(c['data']); // 結果：10  