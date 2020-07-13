interface Hoge {
  x: number;
  y: number;
}

interface Foo {
  x: number;
}

let func1: (obj: Hoge) => void = (x: Foo) => {};  // a. OK

let func2: (obj: Foo) => void = (x: Hoge) => {};  // b. NG