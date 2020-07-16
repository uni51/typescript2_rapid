{
  interface Product {
    name: string;
    price: number;
  }

  // 指定されたオブジェクト（obj）、プロパティ名（name）に応じて、対応するプロパティ値を返すgetProp関数
  // function getProp(obj: any, name: string) {
  //   return obj[name];
  // }
 
  function getProp(obj: Product, name: keyof Product) {
    return obj[name];
  }

  let p = { name: 'お弁当', price: 500 };
  console.log(getProp(p, 'name')); // 結果：お弁当（string型）
  console.log(getProp(p, 'price')); // 結果：500（number型）
}