interface Book {
  isbn: string,
  title: string,
}

interface Magazine {
  mcode: string,
  title: string,
}

function getInfo(): Book | Magazine {
  return {
    isbn: '',
    title: ''
  };
}

// a. 型ガード関数の定義
function isBook(inf: Book | Magazine): inf is Book {
  return (inf as Book).isbn != undefined;
}

// b. 型に応じて操作を分岐
let i = getInfo();
if(isBook(i)) {
  // ISBNコードを取得（Book型の操作）
  console.log(i.isbn);
} else {
  // 雑誌コードを取得（Magazine型の操作）
  console.log(i.mcode);
}