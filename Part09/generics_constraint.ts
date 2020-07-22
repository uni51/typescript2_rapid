{
  // 継承関係にあるHoge／Fooクラス
  class Hoge {}
  class FooBar extends Hoge {}

  // a. Hoge、またはその派生クラスだけを受け付けるジェネリック型
  class MyGenerics<T extends Hoge> {
    value!: T;
    getValue(): T {
      return this.value;
    }
  }

  // b. ジェネリック型にFooBar型を紐付け
  let g = new MyGenerics<FooBar>();
  g.value = new FooBar();
  console.log(g.getValue()); // 結果：FooBar
}
