// 「文字列：数値,・・・」の配列を定義
interface NumberAssoc {
  [index: string]: number;
}

let list: NumberAssoc = {
  'hunderd': 100,
  'thounsand': 1000,
}