// a. 列挙体を定義
enum Sex {
  MALE = 1,
  FEMAIL = 2,
  UNKNOWN = 4
}

// b.MALEにアクセス
let m: Sex = Sex.MALE;
console.log(m); // 結果：1
console.log(Sex[m]); // 結果：MALE