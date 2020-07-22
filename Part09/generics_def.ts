// a. ジェネリック対応のMyGenericクラス
// <T>は型引数
class MyGeneric<T> {
  // T型のvalueプロパティ
  value!: T;
  // T型の値を返すgetValueメソッド
  getValue(): T {
    return this.value;
  }
}

// b. MyGenericクラスにstring型を割り当て
let g = new MyGeneric<string>();
// c. valueプロパティに文字列型の値を代入
g.value = "Hoge";
console.log(g.getValue()); // 結果：Hoge
