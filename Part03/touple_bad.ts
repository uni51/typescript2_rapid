let data: [string, number, boolean] = ['hoge', 10.355, false];
// 先頭の要素を削除
data.shift();
console.log(data[0].substring(2)); // 結果：エラー