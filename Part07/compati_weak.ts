{
  interface MyOption {
    name?: string;
    timeout?: number;
  }

  let obj1 = { hoge: "TEST" };
  let obj2 = {};
  let obj3 = { name: 'MyAPP', hoge: "TEST"};

  let c1: MyOption = obj1; // a. エラー
  let c2: MyOption = obj2; // b. OK
  let c3: MyOption = obj3; // c. OK
}