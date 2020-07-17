interface Book {
  isbn: string;
  title: string;
  price: number;
  published: Date;
}

// 既存の型から特定のプロパティだけを抽出するPick<T, K>
// a. tile／priceだけを抜き出したSubBook型を生成
type SubBook = Pick<Book, 'title' | 'price'>

// 既存の型から特定のプロパティだけを除去するOmit<T, K>
// b. isbn／publishedだけを除去したSubBook2型を生成
type SubBook2 = Omit<Book, 'isbn' | 'published'>

/////////////////////////

/*
interface Book {
  title: string;
  price: number;
}
*/