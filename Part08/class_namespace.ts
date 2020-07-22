// a. MainApp名前空間を定義
namespace MainApp {
  export class Hoge {}
  export function foo() {}
}

let math = new MainApp.Hoge();
MainApp.foo();
