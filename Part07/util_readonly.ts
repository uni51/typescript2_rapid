interface Article {
  url: string;
}

// 読み取り専用のArticle型
let a: Readonly<Article> = {
  url: 'https://wings.msn.to/'
}

// 読み取り専用なので、コンパイルエラー
a.url = 'https://www.web-deli.com/'