interface Product {
  name: string;
  price: number;
}

// Product型配下のプロパティ型を取得
type NameType = Product['name']; // a. string
type NamePriceType = Product['name'|'price']; // b. string | number
type HogeType = Product['hoge']; // c. エラー
