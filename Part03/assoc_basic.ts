let obj: { [index: string]: string; } = {
  'hoge': 'ほげ',
  'foo': 'ふぅ',
  'bar': 'ばぁ'
};

// a.プロパティ構文
console.log(obj.hoge); // 結果：ほげ

// b.ブラケット構文
console.log(obj['hoge']); // 結果：ほげ