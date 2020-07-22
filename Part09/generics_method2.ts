// a. 引数obj1／obj2を結合した結果を返すmerge関数
function merge<T, R>(obj1: T, obj2: R): T & R {
  let result = <T & R>{};
  // b. obj1のメンバーをresultにコピー
  for (let key in obj1) {
    (<any>result)[key] = obj1[key];
  }
  // c. obj2のメンバーをresultにコピー
  for (let key in obj2) {
    (<any>result)[key] = obj2[key];
  }
  return result;
}

let book = {
  title: "JavaScript本格入門",
  price: 2980,
  toString() {
    return `${this.title} ${this.price}`;
  },
};

let logger = {
  debug() {
    console.log(this.toString());
  },
};

// d. book／loggerオブジェクトをマージ
let m = merge(book, logger);
console.log(m); // 結果：{title:"JavaScript本格入門", price:2980, toString: f, debug: f}
