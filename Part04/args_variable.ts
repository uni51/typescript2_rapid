function sum(...values: number[]) {
  let result = 0;
  // 配列の内容を順に足し込む
  for(let value of values) {
    result += value;
  }
  return result;
}

console.log(sum(1, 5, -8, 10)); // 結果：8