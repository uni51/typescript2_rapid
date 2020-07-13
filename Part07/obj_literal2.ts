{
class MyClass {
  hoge() {}
  foo() {}
}

// hogeメソッドを持つ変数x
let x: { hoge(); } = new MyClass();
x.hoge();
x.foo(); // a. 変数xはfooメソッドを持たないので、エラー
} 