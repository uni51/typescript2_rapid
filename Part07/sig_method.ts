{
  // number型の引数x, yを受け取り、number型の戻り値を返すaddメソッド
  interface Calculate {
    // add(x: number, y: number): number;
    add: (x: number, y: number)=>number;
  }

  let obj: Calculate = {
    add(a: number, b: number): number {
      return a + b;
    }
  }
}