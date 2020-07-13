{
  interface Person {
    name: string;
    age: number;
  }

  // Person型を受け取るgreet関数
  function greet(p: Person): void {
    console.log(`こんにちは、${p.name}さん！`);
  }

  let pl = {
    name: 'サクラ',
    age: 2,
    // genderプロパティはPerson型では未定義
    gender: 'female',
  };

  // でも、greet関数はPerson型として受け取る！
  greet(pl);
}
