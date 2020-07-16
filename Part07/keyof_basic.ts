{
  // b. Product型を定義
  interface Product {
    name: string;
    price: number;
  }

  // a. Product型のプロパティセットを取得
  type ProductKeys = keyof Product;
  // type ProductKeys = "name" | "price";
}