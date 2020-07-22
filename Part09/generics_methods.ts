// 非ジェネリック型のMyCollectionクラス
class MyCollection {
  // a. ジェネリックメソッドを準備
  static addAll<T>(data: T[], ...values: T[]): T[] {
    return data.concat(values);
  }
}

// b. ジェネリックメソッドを呼び出し
let x = [10, 15, 30];
console.log(MyCollection.addAll(x, 35, 50)); // 結果： 10, 15, 30, 35, 50
// console.log(MyCollection.addAll<number>(x, 35, 50));
