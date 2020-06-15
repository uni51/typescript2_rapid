// a. 列挙体を定義
enum Sex {
  MALE,
  FEMAIL,
  UNKNOWN
}

// b.MALEにアクセス
let m: Sex = Sex.MALE;
console.log(m); // 結果：0
console.log(Sex[m]); // 結果：MALE