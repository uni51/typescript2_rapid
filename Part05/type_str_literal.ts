// a. Season型を定義
type Season = 'spring' | 'summer' | 'autumn' | 'winter';
// Season型の引数を受け取るgetScene関数
function getScene(s: Season) {
  // 引数sに応じた処理を実装
}

getScene('spring'); // OK
getScene('fall'); // b. エラー