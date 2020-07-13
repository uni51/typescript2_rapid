{
  interface Person {
    readonly name: string;
    age?: number
  };

  // ageは省略可能 
  let p: Person = {
    name: '田中太郎'
  }

  // 読み取り専用プロパティへの代入は不可
  p.name = '鈴木三郎'
}