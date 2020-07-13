{
class MyClass {
  hoge() {}
  foo() {}
}

let x: { hoge(); } = new MyClass();
x.hoge();
x.foo();
} 