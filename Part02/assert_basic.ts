function show(result: string) {
  return `結果は${result}です。`;
}

// a. 数値型を渡すとエラー
//console.log(show(100));

// b. any型に変換
console.log(show(<any>100)); // 「結果は100です」

// c. as構文（as 型名）でも置き換え可
console.log(show(100 as any)); // 「結果は100です」